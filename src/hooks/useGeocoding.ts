import { useCallback, useState } from "react";
import { CityData } from "../types/types";

const useGeocoding = () => {
  const [cityList, setCityList] = useState<CityData[] | []>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchCityList = useCallback(
    async (citySearchInput: string): Promise<void> => {
      setLoading(true);
      setError(null);
      setCityList([]);

      const API_KEY = import.meta.env.VITE_GEOCODING_API_KEY;

      try {
        const response = await fetch(
          `https://api.api-ninjas.com/v1/geocoding?city=${citySearchInput}&country=`,
          {
            method: "GET",
            headers: {
              "X-API-Key": API_KEY,
              "Content-Type": "application/json",
            },
          },
        );

        if (!response.ok) {
          throw new Error(
            `Error! status: ${response.status} ${response.statusText}`,
          );
        }

        const result: CityData[] = await response.json();

        // Assigning `id` to each city
        const citiesWithId = result.map((city) => ({
          ...city,
          id: `${city.latitude},${city.longitude}`,
        }));

        if (result.length === 0) {
          throw new Error("No cities found for the search term");
        }

        setCityList(citiesWithId);
      } catch (error: unknown) {
        if (error instanceof SyntaxError) {
          setError("Invalid response format");
        } else if (error instanceof TypeError) {
          setError("Network error. Please check your connection");
        } else if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("An unexpected error occurred");
        }
      } finally {
        setLoading(false);
      }
    },
    [], // No need for dependencies, since the function doesn’t rely on any external state
  );

  return { cityList, loading, error, fetchCityList };
};

export default useGeocoding;
