import {
  ExtraWeatherDisplay,
  WeatherDisplaySelectorProps,
} from "../../types/types";

const WeatherDisplaySelector: React.FC<WeatherDisplaySelectorProps> = ({
  extraWeatherDisplayed,
  setExtraWeatherDisplayed,
}) => {
  const weatherDisplays = [
    { label: "Humidity", value: ExtraWeatherDisplay.Humidity },
    { label: "Precipitation", value: ExtraWeatherDisplay.Precipitation },
    { label: "Wind", value: ExtraWeatherDisplay.Wind },
  ];
  return (
    <ul className="flex gap-2 overflow-x-auto py-2 text-sm xl:gap-3 xl:text-base">
      {weatherDisplays.map(({ label, value }) => (
        <li key={value}>
          <button
            type="button"
            onClick={() => setExtraWeatherDisplayed(value)}
            className={`rounded border p-2 hover:bg-blue-600 ${
              extraWeatherDisplayed === value ? "bg-blue-600" : "bg-blue-500"
            }`}
          >
            {label}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default WeatherDisplaySelector;
