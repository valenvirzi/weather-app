import { Outlet } from "react-router";
import Header from "./components/Header";
import { useWeatherTheme } from "./hooks/useWeatherTheme";

function App() {
  const theme = useWeatherTheme();
  return (
    <div
      className="app relative flex min-h-screen flex-col bg-cover bg-fixed bg-center bg-no-repeat text-white"
      style={{ backgroundImage: `url(${theme.backgroundImage})` }}
    >
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
