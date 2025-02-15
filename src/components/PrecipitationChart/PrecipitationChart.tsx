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
import { useWeatherData } from "../../context/WeatherDataContext";
import PrecipitationDetails from "./PrecipitationDetails";
import {
  getPrecipitationChartData,
  precipitationChartOptions,
} from "../../utils/precipitationChartConfiguration";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

const PrecipitationChart: React.FC = () => {
  const { weatherData } = useWeatherData();
  const forecastList = weatherData.forecast?.list ?? [];
  const chartData = getPrecipitationChartData(forecastList);
  const chartWidth = (weatherData.forecast?.list?.length ?? 0) * 75;

  return (
    <PrecipitationDetails
      chartWidth={chartWidth}
      precipitationList={chartData.datasets[0].data}
    >
      <div
        className="h-28 overflow-x-auto px-9"
        style={{ width: `${chartWidth}px` }}
      >
        <Bar data={chartData} options={precipitationChartOptions} />
      </div>
    </PrecipitationDetails>
  );
};

export default PrecipitationChart;
