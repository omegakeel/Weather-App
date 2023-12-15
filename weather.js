import axios from "axios";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=imperial"
const apiKey = import.meta.env.VITE_API_KEY;

export const searchBox = document.querySelector(".searchbox");
export const searchBtn = document.querySelector(".search button");


//Code used to fetch API and parse weather data
export function getWeather(city) {
  return axios.get(apiURL + `&q=${city}` +`&appid=${apiKey}`)
      .then(({ data }) => {
          console.log("API Response:", data); // Log the entire API response
          return {
              current: parseCurrentWeather(data),
          };
      })
      .catch((error) => {
          console.error("Error fetching weather:", error);
          throw error; // Re-throw the error to be caught in your mainFunction
      });
}

export function getWeatherZip(zipcode) {
  return axios.get(apiURL + `&zip=${zipcode}` +`&appid=${apiKey}`)
      .then(({ data }) => {
          console.log("API Response:", data); // Log the entire API response
          return {
              current: parseCurrentWeather(data),
          };
      })
      .catch((error) => {
          console.error("Error fetching weather:", error);
          throw error; // Re-throw the error to be caught in your mainFunction
      });
}

function parseCurrentWeather({ main, name, wind, weather, sys, timezone, dt }) { //parse data and make the variables easier to read
    const {
      temp: currentTemp,
      feels_like: feelsLike,
      humidity
    } = main

    const cityName = name

    const {
        speed: windSpeed
    } = wind

const iconCode = weather[0].id
  
    const {
        sunrise,
        sunset
    } = sys

    const timeZ = timezone
    const timeNow = dt

    return {
      cityName,
      currentTemp: Math.round(currentTemp),
      windSpeed: Math.round(windSpeed),
      feelsLike: Math.round(feelsLike),
      humidity: Math.round(humidity),
      iconCode,
      sunrise: new Date(sunrise*1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false }),
      sunset: new Date(sunset * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false }),
      timeZ,
      timeNow: new Date(timeNow*1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false })
    }
  }


