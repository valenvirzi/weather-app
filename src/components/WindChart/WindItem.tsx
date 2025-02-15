import { useMemo } from "react";
import { useSettings } from "../../context/SettingsContext";
import useSpeedConversion from "../../hooks/useSpeedConversion";
import { useWeatherTheme } from "../../hooks/useWeatherTheme";
import { ItemDetailProps } from "../../types/types";
import DayHourItem from "../DayHourItem";

const WindItem: React.FC<ItemDetailProps> = ({ item }) => {
  const theme = useWeatherTheme();
  const { currentSettings } = useSettings();

  const convertedWindSpeed = useSpeedConversion(
    item.wind.speed,
    currentSettings.speedUnit,
  );
  const windBorderColor = useMemo(() => {
    const intensity = Math.min(
      255,
      Math.max(0, Math.round((1 - (item.wind.speed * 0.9) / 14) * 255)),
    );
    return `rgba(255, ${intensity}, 0, 1)`;
  }, [item.wind.speed]);

  return (
    <div className="relative flex flex-col items-center gap-7">
      <div className="flex flex-col items-center lg:text-base">
        <span className="lg:text-lg">{convertedWindSpeed}</span>
        <span className="text-xs xl:text-sm">{currentSettings.speedUnit}</span>
      </div>

      <div
        className="relative flex h-12 w-12 items-center justify-center rounded-full border-4 border-white select-none"
        style={{ borderColor: windBorderColor }}
      >
        <span
          className="relative -top-[60%] p-1 text-center text-sm font-semibold lg:text-base"
          style={{ backgroundColor: theme.color }}
        >
          N
        </span>
        <img
          src="./img/directionArrow.svg"
          alt="direction"
          className="absolute max-w-8"
          style={{
            transform: `rotate(${item.wind.deg}deg)`,
          }}
        />
      </div>
      <DayHourItem dateText={item.dt_txt} />
    </div>
  );
};

export default WindItem;
