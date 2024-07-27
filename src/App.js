import "./App.css";
import { useState } from "react";
import SearchBar from "./components/search";
import fetchWeatherData from "./components/fetchWeatherData";

function App() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = async (city) => {
    console.log("Searching for:", city);
    try {
      const data = await fetchWeatherData(city);
      setWeather(data);
      setError(null);
    } catch (error) {
      setError("Failed to fetch weather data. Please try again.");
    }
    const data = await fetchWeatherData(city);
    setWeather(data);
  };

  return (
    <div>
      <h1>Weather Dashboard</h1>
      <SearchBar onSearch={handleSearch} />
      {error && <p>{error}</p>}
      {weather && (
        <div>
          <h2>{weather.name}</h2>
          <p>{weather.weather[0].description}</p>
          <p>{weather.main.temp}°C</p>
        </div>
      )}
    </div>
  );
}

export default App;
