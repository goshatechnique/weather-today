import React, { useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";

import "./App.scss";
import WeatherBlock from "./components/WeatherBlock";
import { days, months, formattingData } from "./helpers";
import logo from "./logo.png";
import store from "./store";

const getCurrentDate = () => {
  const weekday = days[new Date().getUTCDay()];
  const monthDay = new Date().getUTCDate();
  const month = months[new Date().getUTCMonth()];
  return `${weekday}, ${monthDay} ${month}`;
};

const App = () => {
  const [localTime, setLocalTime] = useState(new Date().getHours());
  const [searchString, setSearchString] = useState(null);
  const [currentWeather, setCurrentWeather] = useState(null);

  const fetchWeather = async searchString => {
    try {
      if (!searchString) {
        throw new Error();
      }
      store.dispatch({ type: "SET_SEARCH_STRING", payload: searchString });
      store.dispatch({ type: "FETCH_WEATHER_FORECAST" });
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${searchString}&appid=57bac9399452758a7c23307c26350fdb`
      );
      setCurrentWeather(formattingData(res.data));
      const searchPlaceTime = res.data.timezone / 3600;
      setLocalTime(new Date().getUTCHours() + searchPlaceTime);
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
