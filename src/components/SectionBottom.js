import React from "react";
import { connect } from "react-redux";

import { createWeekdayFromDate } from "../helpers";
import ForecastCell from "./ForecastCell";
import Loader from "./Loader";
import store from "../store";

const SectionBottom = () => {
  const createForecastComponent = () => {
    if (store.getState().weatherForecastData !== null) {
      let fourdayForecast = [
        store.getState().weatherForecastData.list[9],
        store.getState().weatherForecastData.list[17],
        store.getState().weatherForecastData.list[25],
        store.getState().weatherForecastData.list[33]
      ];
      let id = 0;
      let forecastComponent = fourdayForecast.map(dayForecast => {
        id++;
        return (
          <ForecastCell
            specialBackground={`weather-cell-special-${id}`}
            key={id}
            weekday={createWeekdayFromDate(dayForecast.dt_txt)}
            img={`http://openweathermap.org/img/wn/${dayForecast.weather[0].icon}@2x.png`}
            temperature={Math.round(dayForecast.main.temp - 273.15)}
            cloudiness={dayForecast.weather[0].main}
          />
        );
      });
      return forecastComponent;
    }
  };

  return (
    <div className="section-bottom">
      {store.getState().weatherForecastData !== null ? (
        createForecastComponent()
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
