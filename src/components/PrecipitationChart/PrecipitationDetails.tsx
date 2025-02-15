import { useWeatherData } from "../../context/WeatherDataContext";
import { PrecipitationDetailsProps } from "../../types/types";
import DayHourItem from "../DayHourItem";

const PrecipitationDetails: React.FC<PrecipitationDetailsProps> = ({
  children,
  precipitationList,
  chartWidth,
}) => {
  const { weatherData } = useWeatherData();
  const forecastList = weatherData.forecast?.list ?? [];

  if (!forecastList.length) return null;

  return (
    <div className="mb-2">
      <ul
        className="flex justify-between px-[3.75rem] py-2"
        style={{ width: `${chartWidth}px` }}
      >
        {forecastList.map((item, index) => {
          return (
            <li
              key={item.dt}
              className="relative flex max-w-7 flex-col items-center text-center lg:max-w-5"
            >
              <span className="text-sm lg:text-base">
                {precipitationList[index] === 0
                  ? "0.0"
                  : precipitationList[index]}{" "}
              </span>
              <span className="relative -top-1.5 text-sm">mm</span>
            </li>
          );
        })}
      </ul>
      {children}
      <ul
        className="flex justify-between px-14"
        style={{ width: `${chartWidth}px` }}
      >
        {forecastList.map((item) => {
          return <DayHourItem key={item.dt} dateText={item.dt_txt} />;
        })}
      </ul>
    </div>
  );
};

export default PrecipitationDetails;
