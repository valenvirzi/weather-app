import { ChartOptions } from "chart.js";
import { ForecastItem } from "../types/types";

const getColor = (value: number): string => {
  const intensity = 255 - Math.round((value / 100) * 240); // Map 0-100% to 255-25 (blue fades as humidity increases)
  return `rgba(54, ${intensity}, 248, 1)`;
};

export const humidityChartOptions: ChartOptions<"bar"> = {
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
      max: 100, // Set the maximum value to 100
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

// TODO: Find out why the bars opacity is not set to max unless i hover over each one.

export const humidityChartData = (list: ForecastItem[] | undefined) => ({
  labels: list?.map((item) => item.dt_txt) || [],
  datasets: [
    {
      label: "Humidity (%)",
      data: list?.map((item) => item.main.humidity) || [],
      backgroundColor: list?.map((item) => getColor(item.main.humidity)) || [],
      borderColor: "rgba(54, 171, 248, 1)",
      borderWidth: 1,
      borderRadius: 5,
      barPercentage: 0.9,
      barThickness: 50,
      categoryPercentage: 0.9,
    },
  ],
});
