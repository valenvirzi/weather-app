import { useWeatherData } from "../../context/WeatherDataContext";
import { DetailsProps } from "../../types/types";
import DayHourItem from "../DayHourItem";
import HumidityItem from "./HumidityItem";

const HumidityDetails: React.FC<DetailsProps> = ({ children }) => {
  const { weatherData } = useWeatherData();
  const { forecast: forecastData } = weatherData;

  const forecastLength = forecastData?.list.length ?? 0;
  return (
    <div className="mb-2">
      <ul
        className="flex justify-between px-[3.75rem]"
        style={{ width: `${forecastLength * 75}px` }}
      >
        {forecastData?.list.map((item) => {
          return <HumidityItem key={item.dt} item={item} />;
        })}
      </ul>
      {children}
      <ul
        className="flex justify-between px-14"
        style={{ width: `${forecastLength * 75}px` }}
      >
        {forecastData?.list.map((item) => {
          return <DayHourItem key={item.dt} dateText={item.dt_txt} />;
        })}
      </ul>
    </div>
  );
};

export default HumidityDetails;
