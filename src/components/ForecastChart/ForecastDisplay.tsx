import { useWeatherTheme } from "../../hooks/useWeatherTheme";
import ForecastChart from "./ForecastChart";

const ForecastDisplay: React.FC = () => {
  const theme = useWeatherTheme();

  // TODO: Refactorizar componente basándose en el proyecto original.

  return (
    <section
      className={`card z-10 flex flex-col gap-4 rounded-lg p-2 md:px-3`}
      style={{ backgroundColor: `${theme.color}` }}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img className="w-6 md:w-7" src="./img/calendar.svg" alt="calendar" />
          <h3 className="md:text-lg">5 Day Forecast</h3>
        </div>
        <div className="flex items-center gap-1 px-1 text-xs opacity-70 md:text-sm">
          <span>3</span>
          <span>hours</span>
        </div>
      </div>
      <div>
        <ForecastChart />
      </div>
    </section>
  );
};

export default ForecastDisplay;
