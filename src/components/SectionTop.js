import React from "react";

const SectionTop = ({ currentWeather, localTime }) => {
  return (
    <>
      <div
        className={
          localTime >= 21 || localTime <= 6
            ? "section-top section-top-night"
            : "section-top section-top-day"
        }
      >
        <div className="section-top-temp">{currentWeather.temp} &deg;</div>
        <div className="section-top-cloud">
          {currentWeather.cloudiness.toUpperCase()}
        </div>
        <div className="section-top-air-part">
          <div className="section-top-wind">
            WIND <br /> {currentWeather.wind_speed} M/S
          </div>
          <div className="section-top-humidity">
            HUMIDITY
            <br /> {currentWeather.humidity}%
          </div>
        </div>
        <div className="section-top-city">
          {currentWeather.city.toUpperCase()}
        </div>
      </div>
    </>
  );
};

export default SectionTop;
