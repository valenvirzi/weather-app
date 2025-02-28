import { ItemDetailProps } from "../../types/types";

const HumidityItem: React.FC<ItemDetailProps> = ({ item }) => {
  return (
    <li
      className="relative flex max-w-7 flex-col items-center text-center"
      style={{
        top: `${Math.round(item.main.humidity >= 90 ? -(item.main.humidity - 90) : Math.max(0, Math.min(110, 1400 / item.main.humidity)))}px`,
      }}
    >
      <span className="text-sm lg:text-base">{item.main.humidity}%</span>
    </li>
  );
};
export default HumidityItem;
