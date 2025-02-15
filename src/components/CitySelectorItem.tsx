import { useNavigate } from "react-router";
import useCurrentWeather from "../hooks/useCurrentWeather";
import useForecast from "../hooks/useForecast";
import useUpdateCurrentCity from "../hooks/useUpdateCurrentCity";
import { CityData } from "../types/types";

interface CitySelectorItemProps {
  city: CityData;
  isFavorite: boolean;
  toggleFavoriteCity: (city: CityData) => void;
}

const CitySelectorItem: React.FC<CitySelectorItemProps> = ({
  city,
  isFavorite,
  toggleFavoriteCity,
}) => {
  const { fetchForecast } = useForecast();
  const { fetchCurrentWeather } = useCurrentWeather();
  const updateCurrentCity = useUpdateCurrentCity();
  const navigate = useNavigate();

  const handleCitySelection = () => {
    fetchCurrentWeather({ latitude: city.latitude, longitude: city.longitude });
    fetchForecast({ latitude: city.latitude, longitude: city.longitude });
    updateCurrentCity(city);
    navigate("/");
  };

  const handleToggleFavorite = (e: React.PointerEvent) => {
    e.stopPropagation();
    toggleFavoriteCity(city);
  };

  return (
    <button
      type="button"
      onPointerDown={handleCitySelection}
      className="flex w-full cursor-pointer items-stretch justify-between border-b border-b-white bg-black/75 px-4 py-2"
    >
      <div className="flex flex-col gap-1 text-left">
        <h3 className="font-semibold">{city.name}</h3>
        <p className="text-sm opacity-75">
          {city.state ? `${city.state}, ${city.country}` : `${city.country}`}
        </p>
      </div>
      <div
        role="button"
        tabIndex={0}
        className="grid cursor-pointer content-center p-2"
        onPointerDown={handleToggleFavorite}
        aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
      >
        <img
          className="aspect-square max-w-6"
          src={
            isFavorite ? "./img/favoriteTrue.svg" : "./img/favoriteFalse.svg"
          }
          alt={isFavorite ? "Favorited" : "Not favorited"}
        />
      </div>
    </button>
  );
};

export default CitySelectorItem;
