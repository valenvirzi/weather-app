import { Link, useLocation, useNavigate } from "react-router";
import { useWeatherData } from "../context/WeatherDataContext";

const Header: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { weatherData } = useWeatherData();

  const isSearchOpen = location.pathname === "/search";
  const isSettingsOpen = location.pathname === "/settings";
  return (
    <header className="sticky top-0 z-20 flex items-center justify-between bg-black/80 p-3 xl:px-5 2xl:px-7">
      <Link to="/search" className="flex cursor-pointer items-center gap-2">
        <img
          className="w-6 md:w-7 xl:w-8"
          src="./img/locationPin.svg"
          alt="Location"
        />
        <span className="xl:text-lg">
          {weatherData.city?.name || "No city selected"}
        </span>
      </Link>
      <nav className="flex items-center gap-4">
        {isSearchOpen ? (
          <button
            type="button"
            className="cursor-pointer"
            onPointerDown={() => navigate("/")}
          >
            <img
              className="w-6 md:w-7 xl:w-8"
              src="./img/home.svg"
              alt="Home Page"
            />
          </button>
        ) : (
          <button
            type="button"
            className="cursor-pointer"
            onPointerDown={() => navigate("/search")}
          >
            <img
              className="w-6 md:w-7 xl:w-8"
              src="./img/search.svg"
              alt="Search Page"
            />
          </button>
        )}
        {isSettingsOpen ? (
          <button
            type="button"
            className="cursor-pointer"
            onPointerDown={() => navigate("/")}
          >
            <img
              className="w-6 md:w-7 xl:w-8"
              src="./img/home.svg"
              alt="Home Page"
            />
          </button>
        ) : (
          <button
            type="button"
            className="cursor-pointer"
            onPointerDown={() => navigate("/settings")}
          >
            <img
              className="w-6 md:w-7 xl:w-8"
              src="./img/options.svg"
              alt="Settings Page"
            />
          </button>
        )}
      </nav>
    </header>
  );
};

export default Header;
