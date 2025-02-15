import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import {
  forecastChartData,
  forecastChartOptions,
} from "../../utils/forecastChartConfiguration";
import {
  dashedLinesPlugin,
  gradientShadowPlugin,
} from "../../utils/forecastChartPlugins";
import { useWeatherData } from "../../context/WeatherDataContext";
import useForecast from "../../hooks/useForecast";
import ForecastDetails from "./ForecastDetails";

ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale);

const ForecastChart: React.FC = () => {
  const { weatherData } = useWeatherData();
  const { error: forecastError, loading: forecastLoading } = useForecast();
  const chartWidth = (weatherData.forecast?.list?.length ?? 0) * 100;

  // Handle loading state
  if (forecastLoading) {
    return (
      <div className="w-full">
        <img className="mx-auto w-10 animate-spin" src="./img/loading.svg" />
      </div>
    );
  }

  // Handle error state
  if (forecastError) {
    return (
      <div className="w-full">
        <p className="text-red-600">Error: {forecastError}</p>
      </div>
    );
  }

  // Handle No Data case
  if (!weatherData.forecast?.list?.length) {
    return (
      <div className="w-full">
        <p className="mx-auto inline-block text-2xl text-white">
          No forecast data available
        </p>
      </div>
    );
  }

  return (
    <div className="w-full overflow-x-auto py-2">
      <ForecastDetails>
        <div className="mb-2 h-40 px-10" style={{ width: `${chartWidth}px` }}>
          <Line
            data={forecastChartData(weatherData.forecast.list)}
            options={forecastChartOptions}
            height={300}
            plugins={[dashedLinesPlugin, gradientShadowPlugin]}
          />
        </div>
      </ForecastDetails>
    </div>
  );
};

export default ForecastChart;
