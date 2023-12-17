import { getWeather, getWeatherZip } from "./weather";
import { getTime } from "./weather";
import { searchBox } from "./weather";
import { searchBtn } from "./weather";
import { ICON_MAP } from "./iconMap";
import { ICON_MAP_NIGHT } from "./iconMapNight";

// When user clicks the search button or presses enter on their keyboard, the main function to fetch the weather will run
searchBtn.addEventListener("click", () => {
    mainFunction()
})
searchBox.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        mainFunction();
    }
})
// Find weather of city user entered and render all of the data
function mainFunction() {
    const inputValue = searchBox.value.trim();

    // Check if the input value is a valid number
    if (!isNaN(inputValue)) {
        // Convert the input value to a number if needed
        const zipCode = inputValue;

        // Call the appropriate function based on the input type
        getWeatherZip(zipCode)
            .then(renderWeather)
            .catch(error => {
                console.error("Error fetchig weather.", error);
                console.log("API Response:", error.response.data);
                alert('Error fetching weather. Please try another city.');
            });
    } else {
        // Call the function for string input
        getWeather(inputValue)
            .then(renderWeather)
            .catch(error => {
                console.error(error);
                alert('Error fetching weather. Please try another city.');
            });
    }
}


function renderWeather({ current }) {
    renderCurrentWeather(current)
}


function getIconUrl(iconCode){
    return `icons/${ICON_MAP.get(iconCode)}.png`
}
function getIconUrlNight(iconCode){
    return `icons/${ICON_MAP_NIGHT.get(iconCode)}.png`
}

const currentIcon = document.querySelector(".weather-icon");
const sunPos = document.querySelector(".sun-rise-set");

function renderCurrentWeather(current) {
const lat = current.latitude;
const lon = current.longitude;
const sunset = current.sunset;
const sunrise = current.sunrise;
let time;
let timezone;
getTime(lat, lon).then (
    data => {
        time = data.main.time;
        timezone = data.main.timeZ

        const options = {
            timeZone: timezone,
            hour12: false,
            hour: "2-digit",
            minute: "2-digit",
        }
        
        const finalSunset = sunset.toLocaleString("en-US", options)

        if(time>finalSunset){ //Night Time
            const options = {
                timeZone: timezone,
                hour12: true,
                hour: "2-digit",
                minute: "2-digit",
            }
            const finalSunrise = sunrise.toLocaleString("en-US", options)
    currentIcon.src = getIconUrlNight(current.iconCode)
    var card = document.getElementById("maincard");
    card.classList.remove("cardday");
    card.classList.add("cardnight");
    document.querySelector(".set-rise").textContent = "Sunrise"
    document.querySelector(".sun-pos").textContent = finalSunrise;
    sunPos.src = "images/sunrise.png";
}
else if(time<finalSunset){ // Day Time
    const options = {
        timeZone: timezone,
        hour12: true,
        hour: "2-digit",
        minute: "2-digit",
    }

        const finalSunset = sunset.toLocaleString("en-US", options)
currentIcon.src = getIconUrl(current.iconCode);
var card = document.getElementById("maincard");
    card.classList.remove("cardnight");
    card.classList.add("cardday")
    document.querySelector(".set-rise").textContent = "Sunset"
    document.querySelector(".sun-pos").textContent = finalSunset;
    sunPos.src = "images/sunset.png";

}
    }
)

    document.querySelector(".city").textContent = current.cityName
    document.querySelector(".temp").textContent = current.currentTemp + "°F"
    document.querySelector(".humidity").textContent = current.humidity + "%"
    document.querySelector(".wind").textContent = current.windSpeed + " mph"
    document.querySelector(".feels-like").textContent = current.feelsLike + "°F"
    document.querySelector(".weather").style.display= "block";

}