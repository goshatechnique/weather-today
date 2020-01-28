import {
  SET_SEARCH_STRING,
  FETCH_WEATHER_FORECAST,
  WEATHER_FORECATS_REQUEST,
  WEATHER_FORECATS_RESPONSE,
  WEATHER_FORECATS_ERROR
} from "./constants";

const initialState = {
  weatherForecastData: null,
  weatherIsLoading: false,
  weatherIsLoaded: false,
  weatherIsError: false,
  searchString: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_STRING: {
      return {
        ...state,
        searchString: action.payload
      };
    }
    case FETCH_WEATHER_FORECAST:
      return {
        ...state
      };
    case WEATHER_FORECATS_REQUEST:
      return {
        ...state,
        weatherIsLoading: true,
        weatherIsLoaded: false,
        weatherIsError: false
      };
    case WEATHER_FORECATS_RESPONSE:
      return {
        ...state,
        weatherIsLoading: false,
        weatherIsLoaded: true,
        weatherIsError: false,
        weatherForecastData: action.payload
      };
    case WEATHER_FORECATS_ERROR:
      return {
        ...state,
        weatherIsLoading: false,
        weatherIsLoaded: false,
        weatherIsError: true
      };
    default:
      return state;
  }
};

export default reducer;
