import { useWeatherData } from "../../context/WeatherDataContext";
import WindItem from "./WindItem";

const WindChart: React.FC = () => {
  const { weatherData } = useWeatherData();
  return (
    <ul className="flex h-full w-full items-center gap-10 overflow-x-auto px-10">
      {weatherData.forecast?.list.map((item) => {
        return <WindItem key={item.dt} item={item} />;
      })}
    </ul>
  );
};

export default WindChart;
