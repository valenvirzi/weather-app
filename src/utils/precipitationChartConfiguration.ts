import { ChartOptions } from "chart.js";
import { ForecastItem } from "../types/types";

export const precipitationChartOptions: ChartOptions<"bar"> = {
  responsive: true,
  maintainAspectRatio: false,

  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      enabled: false,
    },
  },
  scales: {
    y: {
      min: 0, // Set the lowest value to 0
      display: false, // Hide y-axis
      grid: {
        display: false, // Hide grid lines
      },
    },
    x: {
      type: "category", // Ensure consistent spacing
      ticks: {
        autoSkip: false,
        display: false, // Prevent skipping ticks
      },
      grid: {
        display: false, // Hide grid lines for cleaner look
      },
    },
  },
};

export const getPrecipitationChartData = (forecastList: ForecastItem[]) => {
  const precipitationData = forecastList.map((data) => ({
    label: data.dt_txt,
    value: data.rain?.["3h"] || data.snow?.["3h"] || 0,
  }));

  return {
    labels: precipitationData.map((data) => data.label),
    datasets: [
      {
        label: "Rain/Snow (mm)",
        data: precipitationData.map((data) => data.value),
        backgroundColor: precipitationData.map((data) =>
          data.value > 0 ? "rgba(5, 100, 235, 1)" : "rgba(211, 211, 211, 0.7)",
        ),
        hoverBackgroundColor: precipitationData.map((data) =>
          data.value > 0 ? "rgba(5, 100, 235, 1)" : "rgba(211, 211, 211, 0.7)",
        ),
        borderColor: precipitationData.map((data) =>
          data.value > 0 ? "rgba(5, 100, 235, 1)" : "rgba(211, 211, 211, 1)",
        ),
        borderWidth: 1,
        borderRadius: 5,
        barPercentage: 0.9,
        barThickness: 50,
        categoryPercentage: 0.9,
      },
    ],
  };
};
