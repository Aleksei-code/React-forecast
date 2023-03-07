import React, { useState } from "react";
import axios from "axios";
import CityComponent from "./components/CityComponent";
import WeatherComponent from "./components/WeatherComponent";

function App() {
  const [city, setCity] = useState();
  const [weather, updateWeather] = useState();
  const [error, setError] = useState();
  const fetchWeather = async (e) => {
    e.preventDefault();
    if (!city) {
      setError("Error: empty request");
    } else {
      let cityFetch = city.trim();
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${cityFetch}&appid=c1482b8531fcbb66c3e13d38d883492d&units=metric`
        )
        .then((response) => {
          updateWeather(response.data);
        })
        .catch((err) => {
          if (err.response) {
            setError("City not found");
          } else if (err.request) {
            setError("Network error");
          } else {
            setError("Unknown error");
          }
        });
    }
  };
  return (
    <div className="container">
      <div className="card">
        <span className="card-border"></span>
        <div className="content">
          <h2>Weather forecast</h2>
          {city && weather ? (
            <WeatherComponent weather={weather} city={city} />
          ) : (
            <CityComponent
              setCity={setCity}
              fetchWeather={fetchWeather}
              error={error}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
