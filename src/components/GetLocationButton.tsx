import useLocationFetcher from "../hooks/useLocationFetcher"; // New hook for location handling

const icons = {
  loading: {
    src: "./img/loading.svg",
    alt: "Loading location",
    className: "animate-spin",
  },
  error: {
    src: "./img/error.svg",
    alt: "Error fetching location",
    className: "",
  },
  default: {
    src: "./img/locationArrow.svg",
    alt: "Get current location",
    className: "",
  },
};

const GetLocationButton: React.FC = () => {
  const { cityLoading, cityError, handleGetLocation } = useLocationFetcher();

  const { src, alt, className } = cityLoading
    ? icons.loading
    : cityError
      ? icons.error
      : icons.default;

  return (
    <button
      type="button"
      onClick={handleGetLocation}
      form="citySearchForm"
      className="cursor-pointer p-2"
      aria-label={alt}
    >
      <img
        className={`aspect-square max-w-6 md:max-w-7 xl:max-w-8 ${className}`}
        src={src}
        alt={alt}
      />
    </button>
  );
};

export default GetLocationButton;
