import CurrentWeatherDisplay from "../components/CurrentWeatherDisplay";
import ExtraInfoDisplay from "../components/ExtraInfoDisplay/ExtraInfoDisplay";
import ForecastDisplay from "../components/ForecastChart/ForecastDisplay";
import useAutoUpdateWeather from "../hooks/useAutoUpdateWeather";
import { useWeatherTheme } from "../hooks/useWeatherTheme";

const MainPage: React.FC = () => {
  const theme = useWeatherTheme();

  useAutoUpdateWeather();

  return (
    <main className="relative flex grow flex-col gap-6 px-3 pt-7 pb-4 xl:px-5 2xl:px-7">
      <div
        className={`absolute inset-0 opacity-55`}
        style={{ backgroundColor: `${theme.color}` }}
      ></div>
      <CurrentWeatherDisplay />
      <ForecastDisplay />
      <ExtraInfoDisplay />
    </main>
  );
};

export default MainPage;
