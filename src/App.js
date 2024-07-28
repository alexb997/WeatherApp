import "./App.css";
import { useState } from "react";
import SearchBar from "./components/search";
import FetchWeatherData from "./components/fetchWeatherData";
import WeatherDisplay from "./components/weatherDisplay";
import ForecastDisplay from "./components/forecastDisplay";
import fetchForecastData from "./components/fetchForecastData";
import { Row, Col, Container } from "react-bootstrap";

function App() {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = async (city) => {
    console.log("Searching for:", city);
    try {
      const data = await FetchWeatherData(city);
      setWeather(data);
      const forecastData = await fetchForecastData(city);
      setForecast(forecastData);
      setError(null);
    } catch (error) {
      setError("Failed to fetch weather data. Please try again.");
    }
  };

  return (
    <Container className="App">
      <h1>Weather Dashboard</h1>
      <SearchBar onSearch={handleSearch} />
      {error && <p>{error}</p>}
      <WeatherDisplay weather={weather} />
      <ForecastDisplay forecast={forecast} />
    </Container>
  );
}

export default App;
