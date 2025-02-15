import { useState } from "react";
import { useWeatherTheme } from "../../hooks/useWeatherTheme";
import HumidityChart from "../HumidityChart/HumidityChart";
import PrecipitationChart from "../PrecipitationChart/PrecipitationChart";
import WindChart from "../WindChart/WindChart";
import WeatherDisplaySelector from "./WeatherDisplaySelector";
import { ExtraWeatherDisplay } from "../../types/types";
import { useWeatherData } from "../../context/WeatherDataContext";

const chartComponents = {
  [ExtraWeatherDisplay.Humidity]: <HumidityChart />,
  [ExtraWeatherDisplay.Precipitation]: <PrecipitationChart />,
  [ExtraWeatherDisplay.Wind]: <WindChart />,
};

const ExtraInfoDisplay: React.FC = () => {
  const [extraWeatherDisplayed, setExtraWeatherDisplayed] =
    useState<ExtraWeatherDisplay>(ExtraWeatherDisplay.Humidity);
  const theme = useWeatherTheme();

  const { weatherData } = useWeatherData();

  return (
    <section
      className={`card z-10 flex flex-col gap-4 rounded-lg p-2 md:px-3`}
      style={{ backgroundColor: `${theme.color}` }}
    >
      <div className="flex flex-col justify-between gap-2">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <img className="w-6 md:w-7" src="./img/graph.svg" alt="graph" />
            <h3 className="md:text-lg">Details</h3>
          </div>
        </div>
        {weatherData.city ? (
          <div className="flex flex-col gap-2">
            <WeatherDisplaySelector
              extraWeatherDisplayed={extraWeatherDisplayed}
              setExtraWeatherDisplayed={setExtraWeatherDisplayed}
            />
            <div className="w-full overflow-x-auto">
              {chartComponents[extraWeatherDisplayed]}
            </div>
          </div>
        ) : (
          <div className="w-full">
            <p className="mx-auto inline-block text-2xl text-white">
              No forecast data available
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ExtraInfoDisplay;
