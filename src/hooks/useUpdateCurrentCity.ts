import { useWeatherData } from "../context/WeatherDataContext";
import { CityData, WeatherData } from "../types/types";

const useUpdateCurrentCity = () => {
  const { setWeatherData } = useWeatherData();

  const updateCurrentCity = (city: CityData) => {
    setWeatherData((prevWeatherData: WeatherData) => ({
      ...prevWeatherData,
      city: city,
    }));
  };

  return updateCurrentCity;
};

export default useUpdateCurrentCity;
