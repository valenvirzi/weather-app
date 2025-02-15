import { useEffect, useState } from "react";
import { useWeatherData } from "../context/WeatherDataContext";
import { Theme } from "../types/types";

const weatherThemes: Record<string, Theme> = {
  Rain: {
    color: "#56668e",
    backgroundImage:
      "https://www.wkbn.com/wp-content/uploads/sites/48/2021/02/rain-raining-raindrops-wet-spring-summer-fall-weather-generic.jpg?w=1280",
  },
  Thunderstorm: {
    color: "#384770",
    backgroundImage:
      "https://images.unsplash.com/photo-1630961769307-4b0463f51c26?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  Drizzle: {
    color: "#517193",
    backgroundImage:
      "https://plus.unsplash.com/premium_photo-1666726664307-707a74015ca4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  Clear: {
    color: "#4286b0",
    backgroundImage:
      "https://images.unsplash.com/photo-1717446586299-41283dbe7e87?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  Clouds: {
    color: "#6f91ae",
    backgroundImage:
      "https://images.unsplash.com/photo-1566010503302-2564ae0d47b6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  Snow: {
    color: "#70aacc",
    backgroundImage:
      "https://images.unsplash.com/photo-1478265409131-1f65c88f965c?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  Mist: {
    color: "#8a8b8e",
    backgroundImage:
      "https://lik.com/cdn/shop/products/Peter-Lik-Into-the-Mist-Framed-Recess-Mount_1800x.jpg?v=1654815739",
  },
  Haze: {
    color: "#8a8b8e",
    backgroundImage:
      "https://lik.com/cdn/shop/products/Peter-Lik-Into-the-Mist-Framed-Recess-Mount_1800x.jpg?v=1654815739",
  },
};

const defaultTheme: Theme = {
  color: "#000000",
  backgroundImage:
    "https://images.foxtv.com/static.q13fox.com/www.q13fox.com/content/uploads/2020/06/764/432/clouds-mostly-sunny.jpg?ve=1&tl=1",
};

export function useWeatherTheme() {
  const { weatherData } = useWeatherData();
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  useEffect(() => {
    const weatherMain = weatherData.currentWeather?.weather?.[0]?.main;
    if (weatherMain) {
      const newTheme = weatherThemes[weatherMain] || defaultTheme;
      setTheme((prevTheme) =>
        prevTheme.color !== newTheme.color ||
        prevTheme.backgroundImage !== newTheme.backgroundImage
          ? newTheme
          : prevTheme,
      );
    }
  }, [weatherData.currentWeather]);

  return theme;
}
