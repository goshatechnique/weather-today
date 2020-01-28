import {
  SET_SEARCH_STRING,
  FETCH_WEATHER_FORECAST,
  WEATHER_FORECATS_REQUEST,
  WEATHER_FORECATS_RESPONSE,
  WEATHER_FORECATS_ERROR
} from "./constants";

export const setSearchString = data => {
  return {
    type: SET_SEARCH_STRING,
    payload: data
  };
};

export const fetchWeatherForecast = () => {
  return {
    type: FETCH_WEATHER_FORECAST
  };
};

export const weatherForecastRequest = () => {
  return {
    type: WEATHER_FORECATS_REQUEST
  };
};

export const weatherForecastResponse = data => {
  return {
    type: WEATHER_FORECATS_RESPONSE,
    payload: data
  };
};

export const weatherForecastError = () => {
  return {
    type: WEATHER_FORECATS_ERROR
  };
};
