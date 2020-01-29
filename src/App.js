import React, { useState } from "react";
import Swal from "sweetalert2";
import weather from "openweather-apis";
import { transliterate } from "transliteration";

import "./App.scss";
import WeatherBlock from "./components/WeatherBlock";
import { days, months, formattingData } from "./helpers";
import logo from "./logo.png";
import store from "./store";

const getCurrentDate = () => {
  const weekday = days[new Date().getUTCMonth()];
  const monthDay = new Date().getUTCDate();
  const month = months[new Date().getUTCMonth()];
  return `${weekday}, ${monthDay} ${month}`;
};

const App = () => {
  const [localTime, setLocalTime] = useState(new Date().getHours());
  const [searchString, setSearchString] = useState(null);
  const [currentWeather, setCurrentWeather] = useState(null);

  const fetchWeather = searchString => {
    try {
      if (!searchString) {
        throw new Error();
      }
      let trSearchString = transliterate(searchString);
      store.dispatch({ type: "SET_SEARCH_STRING", payload: trSearchString });
      store.dispatch({ type: "FETCH_WEATHER_FORECAST" });
      weather.setLang(navigator.language || navigator.userLanguage);
      weather.setUnits("metric");
      weather.setCity(trSearchString);
      weather.setAPPID("57bac9399452758a7c23307c26350fdb");
      weather.getAllWeather(function(err, response) {
        const weatherData = formattingData(response);
        if (!weatherData) return;
        const a = weatherData.timezone / 3600;
        setLocalTime(new Date().getUTCHours() + a);
        setCurrentWeather(weatherData);
      });
    } catch (e) {
      Swal.fire("Enter city name.");
    }
  };

  return (
    <div className="weather-container">
      <div className="header">
        <img className="logo" src={logo} alt="#" />
        <input
          className="input-search"
          type="text"
          onChange={e => {
            e.preventDefault();
            setSearchString(e.target.value);
          }}
        />
        <button
          onClick={() => {
            fetchWeather(searchString);
          }}
          className="search-button"
        >
          Search
        </button>
        <div className="date">{getCurrentDate()}</div>
      </div>
      <WeatherBlock localTime={localTime} currentWeather={currentWeather} />
    </div>
  );
};

export default App;
