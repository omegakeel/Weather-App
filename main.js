import { getWeather } from "./weather";
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
function mainFunction(){
getWeather(searchBox.value)
.then(renderWeather)
.catch( error => {
    console.error(error)
    alert("Error fetching weather. Please try another city.")
})
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

const currentIcon = document.querySelector(".weather-icon")


function renderCurrentWeather(current) {

if(current.timeNow>current.sunset){ //Night Time
    currentIcon.src = getIconUrlNight(current.iconCode)
    var card = document.getElementById("maincard");
    card.classList.remove("cardday");
    card.classList.add("cardnight");
}
else if(current.timeNow<current.sunset){ // Day Time
currentIcon.src = getIconUrl(current.iconCode);
var card = document.getElementById("maincard");
    card.classList.remove("cardnight");
    card.classList.add("cardday")
}
    document.querySelector(".city").textContent = current.cityName
    document.querySelector(".temp").textContent = current.currentTemp + "°F"
    document.querySelector(".humidity").textContent = current.humidity + "%"
    document.querySelector(".wind").textContent = current.windSpeed + " mph"
    document.querySelector(".feels-like").textContent = current.feelsLike + "°F"
    document.querySelector(".weather").style.display= "block";

}