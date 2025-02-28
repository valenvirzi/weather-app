import { motion } from "motion/react";
import { CityData } from "../types/types";
import CitySelectorItem from "./CitySelectorItem";
import { useState } from "react";

interface CitiesCollapsibleListProps {
  title: string;
  citiesList: CityData[];
  toggleFavoriteCity: (city: CityData) => void;
  favoriteCitySet: Set<string>;
  searchResultCount?: number;
  citiesLoading?: boolean;
  citiesError?: string | null;
}

const CitiesCollapsibleList: React.FC<CitiesCollapsibleListProps> = ({
  title,
  citiesList,
  toggleFavoriteCity,
  favoriteCitySet,
  searchResultCount,
  citiesLoading,
  citiesError,
}) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const isSearchResults = title === "Search Results";
  const isEmpty = citiesList.length === 0;

  // Define the empty messages
  const getEmptyMessage = (): string => {
    if (isSearchResults) {
      if (searchResultCount === 0) {
        return "No results found for this search";
      } else {
        return "All results are already in your favorite list";
      }
    }
    return "No favorite cities yet";
  };

  const emptyMessage = getEmptyMessage();

  return (
    <div className="flex flex-col gap-px">
      <button
        className="flex w-full cursor-pointer items-center justify-between gap-2 border-b border-b-white bg-black p-2 px-2 pr-4"
        type="button"
        onClick={handleToggle}
      >
        <div className="flex items-center gap-2">
          <img
            src={`./img/${isSearchResults ? "search" : "favoriteTrue"}.svg`}
            className="max-w-6 md:max-w-7 xl:max-w-8"
            alt={isSearchResults ? "Search icon" : "Favorites icon"}
          />
          <span className="text-lg">{title}</span>
        </div>
        <img
          className={`w-4 transition-transform duration-200 ${isOpen ? "rotate-0" : "-rotate-90"}`}
          src="./img/arrow-collapse.svg"
          alt="collapse"
        />
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        {citiesError ? (
          <div className="flex items-center justify-center bg-black/75 p-4">
            <p className="text-center text-sm text-gray-300 md:text-base">
              {citiesError}
            </p>
          </div>
        ) : citiesLoading ? (
          <div className="flex items-center justify-center bg-black/75 p-4">
            <img
              className="aspect-square max-w-6 animate-spin self-center md:max-w-7 xl:max-w-8"
              src="./img/loading.svg"
              alt="loading"
            />
          </div>
        ) : isEmpty ? (
          <div className="flex items-center justify-center bg-black/75 p-4">
            <p className="text-center text-sm text-gray-300 md:text-base">
              {emptyMessage}
            </p>
          </div>
        ) : (
          <ul className="flex flex-col gap-px">
            {citiesList.map((city) => (
              <CitySelectorItem
                key={city.id}
                city={city}
                isFavorite={favoriteCitySet.has(city.id)}
                toggleFavoriteCity={toggleFavoriteCity}
              />
            ))}
          </ul>
        )}
      </motion.div>
    </div>
  );
};

export default CitiesCollapsibleList;
