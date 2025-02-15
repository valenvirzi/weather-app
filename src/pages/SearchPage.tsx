import CityListDisplay from "../components/CityListDisplay";
import CitySearchForm from "../components/CitySearchForm";
import useGeocoding from "../hooks/useGeocoding";

const SearchPage: React.FC = () => {
  const {
    cityList,
    error: citiesError,
    fetchCityList,
    loading: citiesLoading,
  } = useGeocoding();
  return (
    <div className="flex grow flex-col gap-px bg-black/80">
      <CitySearchForm fetchCityList={fetchCityList} />
      <CityListDisplay
        cityList={cityList}
        citiesError={citiesError}
        citiesLoading={citiesLoading}
      />
    </div>
  );
};
export default SearchPage;
