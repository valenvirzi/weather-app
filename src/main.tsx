import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import { SettingsProvider } from "./context/SettingsContext.tsx";
import { WeatherDataProvider } from "./context/WeatherDataContext.tsx";
import SettingsPage from "./pages/SettingsPage.tsx";
import MainPage from "./pages/MainPage.tsx";
import SearchPage from "./pages/SearchPage.tsx";
import ErrorPage from "./pages/ErrorPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <MainPage /> },
      { path: "/settings", element: <SettingsPage /> },
      { path: "/search", element: <SearchPage /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SettingsProvider>
      <WeatherDataProvider>
        <RouterProvider router={router} />
      </WeatherDataProvider>
    </SettingsProvider>
  </StrictMode>,
);
