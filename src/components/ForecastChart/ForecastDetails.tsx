import React from "react";
import { useWeatherData } from "../../context/WeatherDataContext";
import { DetailsProps } from "../../types/types";
import ForecastItemDetails from "./ForecastItemDetails";
import ForecastItemRain from "./ForecastItemRain";

const ForecastDetails: React.FC<DetailsProps> = ({ children }) => {
  const { weatherData } = useWeatherData();
  const { forecast: forecastData } = weatherData;
  const forecastLength = forecastData?.list.length ?? 0;
  return (
    <>
      <ul
        className="mb-2 flex justify-between px-6"
        style={{ width: `${(forecastLength - 1) * 100 + 100}px` }}
      >
        {forecastData?.list.map((item) => (
          <ForecastItemDetails key={item.dt} item={item} />
        ))}
      </ul>
      {children}
      <ul
        className="flex justify-between px-8"
        style={{ width: `${(forecastLength - 1) * 100 + 100}px` }}
      >
        {forecastData?.list.map((item) => (
          <ForecastItemRain key={item.dt} item={item} />
        ))}
      </ul>
    </>
  );
};

export default ForecastDetails;
