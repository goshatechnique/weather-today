import React from "react";
import "./weatherBlock.scss";
import "./weatherBlock.css";

import SectionTop from "./SectionTop";
import SectionBottom from "./SectionBottom";

const WeatherBlock = ({ currentWeather, localTime }) => {
  return (
    <div className="weather-block">
      {currentWeather !== null ? (
        <div className="section">
          <SectionTop currentWeather={currentWeather} localTime={localTime} />
          <SectionBottom currentWeather={currentWeather} />
        </div>
      ) : (
        <div className="search-helper">Search your city</div>
      )}
    </div>
  );
};

export default WeatherBlock;
