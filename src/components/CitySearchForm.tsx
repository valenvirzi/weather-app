import { useCallback, useRef, useState } from "react";
import GetLocationButton from "./GetLocationButton";

interface CitySearchFormProps {
  fetchCityList: (citySearchInput: string) => void;
}

const CitySearchForm: React.FC<CitySearchFormProps> = ({ fetchCityList }) => {
  const [citySearchInput, setCitySearchInput] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleCitySearch = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      if (citySearchInput.trim()) {
        fetchCityList(citySearchInput);
      }
    },
    [citySearchInput, fetchCityList],
  );

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setCitySearchInput(e.target.value);
    },
    [],
  );

  return (
    <div className="bg-opacity-80 flex items-stretch border-y border-y-white bg-black">
      <GetLocationButton />
      <form
        id="citySearchForm"
        onSubmit={handleCitySearch}
        className="flex w-full"
      >
        <input
          ref={inputRef}
          type="text"
          name="citySearchInput"
          id="citySearchInput"
          onChange={handleInputChange}
          placeholder="London, Miami, etc..."
          className="w-full bg-white p-2 px-4 text-black"
        />
        <button
          type="submit"
          form="citySearchForm"
          className="cursor-pointer p-2"
          aria-label="Search city name"
        >
          <img
            className="aspect-square max-w-6 md:max-w-7 xl:max-w-8"
            src="./img/search.svg"
            alt="Search city name"
          />
        </button>
      </form>
    </div>
  );
};

export default CitySearchForm;
