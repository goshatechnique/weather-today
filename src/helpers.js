import Swal from "sweetalert2";

export const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
];

export const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

export const formattingData = weatherData => {
  try {
    if (weatherData === null) throw new Error();
    const structuredData = {
      city: weatherData.name,
      country: weatherData.sys.country,
      coords: `${weatherData.coord.lon};${weatherData.coord.lat}`,
      temp: weatherData.main.temp,
      temp_feels: weatherData.main.feels_like,
      wind_deg: weatherData.wind.deg,
      wind_speed: weatherData.wind.speed,
      cloudiness: weatherData.weather[0].description,
      iconUrl: weatherData.weather[0].icon,
      sunrise: new Date(weatherData.sys.sunrise).toTimeString().substr(0, 5),
      humidity: weatherData.main.humidity,
      timezone: weatherData.timezone
    };
    return structuredData;
  } catch (e) {
    Swal.fire(`Can't find it.`);
  }
};
