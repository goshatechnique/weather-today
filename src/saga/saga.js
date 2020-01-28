import { call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";

import { FETCH_WEATHER_FORECAST } from "./constants";
import {
  weatherForecastRequest,
  weatherForecastResponse,
  weatherForecastError
} from "./actions";
import store from "../store";

function* weatherForecastWorker() {
  try {
    let forecastData;
    yield put(weatherForecastRequest());
    yield call(() => {
      return new Promise(async resolve => {
        const searchString = store.getState().searchString;
        const res = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?q=${searchString}&appid=57bac9399452758a7c23307c26350fdb`
        );
        forecastData = res.data;
        resolve();
      });
    });
    yield put(weatherForecastResponse(forecastData));
  } catch (e) {
    yield put(weatherForecastError());
  }
}

function* weatherForecastWatcher() {
  yield takeEvery(FETCH_WEATHER_FORECAST, weatherForecastWorker);
}

export default weatherForecastWatcher;
