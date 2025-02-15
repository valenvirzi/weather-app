import { useCallback, useState } from "react";
import {
  CurrentWeatherResponse,
  GeoCoordinates,
  WeatherData,
} from "../types/types";
import { useWeatherData } from "../context/WeatherDataContext";

const updateCurrentWeather = (
  currentWeather: CurrentWeatherResponse,
  setWeatherData: React.Dispatch<React.SetStateAction<WeatherData>>,
) => {
  setWeatherData((prevWeatherData: WeatherData) => ({
    ...prevWeatherData,
    currentWeather,
  }));
};

const useCurrentWeather = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const { setWeatherData } = useWeatherData();

  const fetchCurrentWeather = useCallback(
    async (coord: GeoCoordinates): Promise<void> => {
      setLoading(true);
      setError(null);

      const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${coord.latitude}&lon=${coord.longitude}&appid=${API_KEY}`,
        );
        if (!response.ok) {
          throw new Error(
            `HTTP Error: ${response.status} - ${response.statusText}`,
          );
        }

        const result: CurrentWeatherResponse = await response.json();
        updateCurrentWeather(result, setWeatherData);
      } catch (error: unknown) {
        if (error instanceof SyntaxError) {
          setError("Invalid response format.");
        } else if (error instanceof TypeError) {
          setError("Network error. Please check your connection.");
        } else if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("An unexpected error occurred.");
        }
      } finally {
        setLoading(false);
      }
    },
    [setWeatherData],
  );
  return { loading, error, fetchCurrentWeather };
};

export default useCurrentWeather;
