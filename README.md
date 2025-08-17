# Climatic - Weather App

A weather app built with React, TypeScript, and Tailwind CSS. This app allows users to search for the weather in different cities, display current weather data, and see a 5-day forecast of any chosen location. The app fetches data from multiple APIs, including a geocoding API, current weather API, and a 5-day forecast API.

## Features

- **City Search**: Users can search for a city to get its weather information.
- **Current Weather**: Displays the current weather, including temperature, humidity, and weather conditions.
- **5-Day Forecast**: Shows a daily forecast with weather data for the next five days.
- **Local Storage**: Stores weather data in `localStorage` so the app can render the last selected city's weather information on reload.
- **Chart Display**: Visualizes daily temperature trends using a line chart built with Chart.js.
- **Responsive Design**: Fully responsive layout built with Tailwind CSS.
- **Smooth Animations**: Uses Framer Motion for smooth and interactive animations throughout the app.

## Technologies Used

- **React**: Frontend framework for building the app.
- **TypeScript**: Type-safe JavaScript for better development experience and reliability.
- **Tailwind CSS**: Utility-first CSS framework for styling the app.
- **Chart.js**: For rendering the daily temperature chart.
- **Framer Motion**: A library for creating animations and transitions in React apps.

## Installation

Step 1: Clone the repository:

   ```bash
   git clone https://github.com/yourusername/weather-app.git
   ```

Step 2: Navigate to the project directory:

   ```bash
cd weather-app
   ```

Step 3: Install dependencies:

   ```bash
npm install
   ```

Step 4: API Keys:

   ```bash
# Create a .env file in the root directory and add your API keys:
REACT_APP_GEOCODING_API_KEY=your_key_here
REACT_APP_WEATHER_API_KEY=your_key_here

# Then import them by replacing the API_KEY variables on the fetching hooks
   ```

Step 5: Run the application:

   ```bash
# To run the app in development mode:
npm start
   ```

Step 6: Access the application:

   ```bash
# Open your browser and navigate to http://localhost:3000
# Or whatever port you have it set up on your Vite configuration
   ```

## Author

**Valentin Virzi**
* GitHub: [https://github.com/valenvirzi](https://github.com/valenvirzi)
* Website/Portfolio: [https://valentin-virzi.vercel.app](https://valentin-virzi.vercel.app)
