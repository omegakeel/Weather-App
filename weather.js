import axios from "axios";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=imperial"
const apiKey = import.meta.env.VITE_API_KEY;

const geoURL = "https://api.ipgeolocation.io/timezone?"
const geoKey = import.meta.env.VITE_API_KEY2;

export const searchBox = document.querySelector(".searchbox");
export const searchBtn = document.querySelector(".search button");


export function getTime(lat, long){
    return axios.get(
        geoURL + `apiKey=${geoKey}`,
        {
            params : {
                lat,
                long,
            },
        }
    ).then(({ data }) => {
        return {
            main: parseGeo(data)
        }
    })
}

function parseGeo({ time_24, timezone }) {
    const time = time_24
    const timeZ = timezone

    return {
        time,
        timeZ,
    }
}  


//Code used to fetch API and parse weather data
export function getWeather(city) {
  return axios.get(apiURL + `&q=${city}` +`&appid=${apiKey}`)
      .then(({ data }) => {
        //   console.log("Weather API Response:", data); // Log the entire API response
          return {
              current: parseCurrentWeather(data),
          };
      })
      .catch((error) => {
          console.error("Error fetching weather:", error);
          throw error; // Re-throw the error to be caught in mainFunction
      });
}

export function getWeatherZip(zipcode) {
  return axios.get(apiURL + `&zip=${zipcode}` +`&appid=${apiKey}`)
      .then(({ data }) => {
        //   console.log("API Response:", data); // Log the entire API response
          return {
              current: parseCurrentWeather(data),
          };
      })
      .catch((error) => {
          console.error("Error fetching weather:", error);
          throw error; // Re-throw the error to be caught in mainFunction
      });
}

function parseCurrentWeather({ main, name, wind, weather, sys, dt, coord}) { //parse data and make the variables easier to read
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

    // const timeZ = timezone
    const timeNow = dt

    const {
        lat: latitude,
        lon: longitude
    } = coord


    return {
      cityName,
      currentTemp: Math.round(currentTemp),
      windSpeed: Math.round(windSpeed),
      feelsLike: Math.round(feelsLike),
      humidity: Math.round(humidity),
      iconCode,
      sunrise: new Date(sunrise*1000),
      sunset: new Date(sunset * 1000),
      timeNow,
      latitude,
      longitude
    }
  }


