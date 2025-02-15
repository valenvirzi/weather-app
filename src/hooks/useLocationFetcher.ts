import useCurrentWeather from "../hooks/useCurrentWeather";
import useForecast from "../hooks/useForecast";
import useReverseGeocoding from "../hooks/useReverseGeocoding";
import useUpdateCurrentCity from "../hooks/useUpdateCurrentCity";
import { GeoCoordinates } from "../types/types";

const useLocationFetcher = () => {
  const { fetchForecast } = useForecast();
  const { fetchCurrentWeather } = useCurrentWeather();
  const {
    loading: cityLoading,
    error: cityError,
    fetchCity,
  } = useReverseGeocoding();
  const updateCurrentCity = useUpdateCurrentCity();

  const handleGetLocation = () => {
    if (!navigator.geolocation) {
      console.error("Geolocation is not supported by this browser.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const coordinates: GeoCoordinates = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        };

        try {
          const fetchedCity = await fetchCity(coordinates);
          if (fetchedCity) updateCurrentCity(fetchedCity);

          fetchCurrentWeather(coordinates);
          fetchForecast(coordinates);
        } catch (error) {
          console.error("Error fetching location data:", error);
        }
      },
      (error) => {
        console.error(`Geolocation error: ${error.message}`);
      },
    );
  };

  return { cityLoading, cityError, handleGetLocation };
};

export default useLocationFetcher;
