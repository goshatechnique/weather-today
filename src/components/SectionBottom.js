import React from "react";
import { connect } from "react-redux";

import { days } from "../helpers";
import ForecastCell from "./ForecastCell";
import Loader from "./Loader";
import store from "../store";

const SectionBottom = () => {
  let forecastArray;
  if (store.getState().weatherForecastData !== null) {
    let data = [];
    let id = 0;
    data.push(store.getState().weatherForecastData.list[15]);
    data.push(store.getState().weatherForecastData.list[23]);
    data.push(store.getState().weatherForecastData.list[31]);
    data.push(store.getState().weatherForecastData.list[39]);
    forecastArray = data.map(dayForecast => {
      const stringDate = dayForecast.dt_txt.substr(0, 10).toString();
      const UTCdate = new Date(stringDate).getUTCDay();
      id++;
      return (
        <ForecastCell
          specialBackground={
            id % 2 === 0 ? "weather-cell-special-background" : ""
          }
          key={id}
          weekday={days[UTCdate].substr(0, 3)}
          img={`http://openweathermap.org/img/wn/${dayForecast.weather[0].icon}@2x.png`}
          temperature={Math.round(dayForecast.main.temp - 273)}
          cloudiness={dayForecast.weather[0].main}
        />
      );
    });
  }

  return (
    <div className="section-bottom">
      {store.getState().weatherForecastData !== null ? (
        forecastArray
      ) : (
        <Loader />
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    weatherForecastData: state.weatherForecastData
  };
};

export default connect(mapStateToProps)(SectionBottom);