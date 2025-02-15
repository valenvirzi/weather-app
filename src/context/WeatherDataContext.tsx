import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  ReactNode,
} from "react";
import { WeatherData, WeatherDataContextType } from "../types/types";

const defaultWeatherData: WeatherData = {
  city: null,
  currentWeather: null,
  forecast: null,
  timestamp: null,
};

const WeatherDataContext = createContext<WeatherDataContextType | undefined>(
  undefined,
);

export const WeatherDataProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [weatherData, setWeatherData] = useState<WeatherData>(() => {
    const storedWeather = localStorage.getItem("weatherData");
    if (storedWeather) {
      const parsedWeather = JSON.parse(storedWeather);
      return parsedWeather;
    } else {
      return defaultWeatherData;
    }
  });

  useEffect(() => {
    localStorage.setItem("weatherData", JSON.stringify(weatherData));
  }, [weatherData]);

  return (
    <WeatherDataContext.Provider value={{ weatherData, setWeatherData }}>
      {children}
    </WeatherDataContext.Provider>
  );
};

export const useWeatherData = () => {
  const context = useContext(WeatherDataContext);
  if (!context) {
    throw new Error("useWeatherData must be used within a WeatherDataProvider");
  }
  return context;
};
