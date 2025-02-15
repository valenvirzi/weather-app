import { useEffect } from "react";
import useCurrentWeather from "./useCurrentWeather";
import useForecast from "./useForecast";

const useAutoUpdateWeather = () => {
  const { fetchForecast } = useForecast();
  const { fetchCurrentWeather } = useCurrentWeather();

  const THREE_HOURS_MS = 10800000;

  useEffect(() => {
    const storedWeather = localStorage.getItem("weatherData");

    // Return if there's no weather data stored
    if (!storedWeather) return;

    const { city, timestamp } = JSON.parse(storedWeather);

    const isDataStale = Date.now() - timestamp > THREE_HOURS_MS;

    if (city) {
      if (isDataStale) {
        fetchCurrentWeather({
          latitude: city.latitude,
          longitude: city.longitude,
        });
        fetchForecast({ latitude: city.latitude, longitude: city.longitude });
      }
    }
  }, [fetchCurrentWeather, fetchForecast]);
};

export default useAutoUpdateWeather;
