import { ItemDetailProps } from "../../types/types";

const ForecastItemRain: React.FC<ItemDetailProps> = ({ item }) => {
  return (
    <li className="relative right-1 flex max-w-9 items-center md:right-2">
      <img className="w-5 md:w-6" src="./img/umbrella.svg" alt="umbrella" />
      <span className="text-sm md:text-base">
        {Math.round(item.pop * 100)}%
      </span>
    </li>
  );
};

export default ForecastItemRain;
