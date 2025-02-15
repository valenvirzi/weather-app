import { useEffect, useMemo, useState } from "react";
import { CityData } from "../types/types";
import CitiesCollapsibleList from "./CitiesCollapsibleList";

interface CityListDisplayProps {
  cityList: CityData[] | null;
  citiesLoading: boolean;
  citiesError: string | null;
}

const CityListDisplay: React.FC<CityListDisplayProps> = ({
  cityList,
  citiesError,
  citiesLoading,
}) => {
  const [favoriteCities, setFavoriteCities] = useState<CityData[]>(() =>
    JSON.parse(localStorage.getItem("favoriteCities") || "[]"),
  );

  const [storedLatestSearch, setStoredLatestSearch] = useState<CityData[]>(
    () => {
      return JSON.parse(localStorage.getItem("lastSearch") || "[]");
    },
  );

  // Update localStorage when cityList changes (if new data is available)
  useEffect(() => {
    if (cityList && cityList.length > 0) {
      localStorage.setItem("lastSearch", JSON.stringify(cityList));
      setStoredLatestSearch(cityList);
    }
  }, [cityList]);

  // Sync localStorage when favoriteCities change
  useEffect(() => {
    localStorage.setItem("favoriteCities", JSON.stringify(favoriteCities));
  }, [favoriteCities]);

  const toggleFavoriteCity = (city: CityData) => {
    setFavoriteCities((prevFavorites) => {
      const favoriteCitySet = new Set(prevFavorites.map((fav) => fav.id));
      const isAlreadyFavorite = favoriteCitySet.has(city.id);

      return isAlreadyFavorite
        ? prevFavorites.filter((favCity) => favCity.id !== city.id)
        : [...prevFavorites, city];
    });
  };

  // Store favorite cities in a Set (using city.id for fast lookup)
  const favoriteCitySet = useMemo(
    () => new Set(favoriteCities.map((city) => city.id)),
    [favoriteCities],
  );

  // Filter search results (to exclude favorites)
  const filteredCities = useMemo(
    () => storedLatestSearch.filter((city) => !favoriteCitySet.has(city.id)),
    [storedLatestSearch, favoriteCitySet],
  );

  const searchResultCount = storedLatestSearch.length;

  return (
    <>
      <CitiesCollapsibleList
        title="Search Results"
        citiesList={filteredCities}
        toggleFavoriteCity={toggleFavoriteCity}
        favoriteCitySet={favoriteCitySet}
        searchResultCount={searchResultCount}
        citiesError={citiesError}
        citiesLoading={citiesLoading}
      />
      <CitiesCollapsibleList
        title="Favorite Cities"
        citiesList={favoriteCities}
        toggleFavoriteCity={toggleFavoriteCity}
        favoriteCitySet={favoriteCitySet}
      />
    </>
  );
};

export default CityListDisplay;
