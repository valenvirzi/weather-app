import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import HumidityDetails from "./HumidityDetails";
import { useWeatherData } from "../../context/WeatherDataContext";
import {
  humidityChartData,
  humidityChartOptions,
} from "../../utils/humidityChartConfiguration";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

const HumidityChart: React.FC = () => {
  const { weatherData } = useWeatherData();

  const chartWidth = (weatherData.forecast?.list?.length ?? 0) * 75;
  return (
    <HumidityDetails>
      <div className="h-36 px-9" style={{ width: `${chartWidth}px` }}>
        <Bar
          options={humidityChartOptions}
          data={humidityChartData(weatherData.forecast?.list)}
        />
      </div>
    </HumidityDetails>
  );
};

export default HumidityChart;
