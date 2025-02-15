import { useCallback, useState } from "react";
import { CityData, GeoCoordinates } from "../types/types";

const useReverseGeocoding = () => {
  const [city, setCity] = useState<CityData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchCity = useCallback(
    async (coordinates: GeoCoordinates): Promise<CityData | null> => {
      setLoading(true);
      setError(null);
      setCity(null);

      const API_KEY = import.meta.env.VITE_GEOCODING_API_KEY;

      try {
        const response = await fetch(
          `https://api.api-ninjas.com/v1/reversegeocoding?lat=${coordinates.latitude}&lon=${coordinates.longitude}`,
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

        // Check if there's data returned, if not, handle accordingly
        if (!result || result.length === 0) {
          throw new Error("No city data found for the provided coordinates.");
        }

        const cityData = {
          name: result[0].name,
          latitude: coordinates.latitude,
          longitude: coordinates.longitude,
          country: result[0].country,
          state: result[0].state,
        };

        setCity(cityData); // Update the state with the fetched city data
        return cityData; // Explicitly return the city data
      } catch (error: unknown) {
        if (error instanceof Error) {
          setError(error.message); // Log the specific error message
        } else {
          setError("An unexpected error occurred.");
        }
        return null; // Return null if an error occurs
      } finally {
        setLoading(false);
      }
    },
    [], // No need to recreate this function unless other dependencies are needed
  );

  return { city, loading, error, fetchCity };
};

export default useReverseGeocoding;
