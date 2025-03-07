import { Outlet } from "react-router";
import Header from "./components/Header";
import { useWeatherTheme } from "./hooks/useWeatherTheme";

function App() {
  const theme = useWeatherTheme();

  // TODO: Make the testing for the app
  // TODO: Make the documentation for the app
  // TODO: Check all the comments on the code and add where needed

  return (
    <div
      className="app relative flex min-h-svh flex-col bg-cover bg-fixed bg-center bg-no-repeat text-white"
      style={{ backgroundImage: `url(${theme.backgroundImage})` }}
    >
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
