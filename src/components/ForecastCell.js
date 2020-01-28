import React from "react";
import "./forecastCell.scss";

const ForecastCell = ({
  weekday,
  img,
  temperature,
  cloudiness,
  specialBackground
}) => {
  return (
    <div className={`weather-cell ${specialBackground}`}>
      <div className="weather-cell-weekday">{weekday.toUpperCase()}</div>
      <img className="weather-cell-img" src={img} alt="#" />
      <div className="weather-cell-temp">{temperature} &deg;</div>
      <div className="weather-cell-cloudiness">{cloudiness.toUpperCase()}</div>
    </div>
  );
};

export default ForecastCell;
