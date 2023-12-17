# Weather-App
[Click here to try!](https://weather-5ud4kpeyx-akeel-butts-projects.vercel.app/)

## Overview

This project is weather web application that allows users to check the current weather conditions for a given city or zip code. The application displays key weather information, including temperature, humidity, wind speed, and more. Additionally, it dynamically adjusts the background and icon based on the time of day.

## Features

1. **Search Functionality:** Users can enter a city name or zip code to retrieve real-time weather data.
2. **Responsive Design:** The application is designed to work seamlessly on both desktop and mobile devices.
3. **Time-dependent Background:** The background color and icon change based on whether it's daytime or nighttime at the specified location.
4. **Weather Icons:** The app uses weather icons to visually represent the current weather conditions.
5. **Dynamic Sun Position:** The application displays the sunrise or sunset time based on the time of day.
6. **Informative Footer:** The footer provides a copyright notice and serves as a clear endpoint for users.

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)
- Axios (for API requests)
- Vite (for fast development server and efficient bundling)
- OpenWeatherMap API
- IPGeolocation API

## Project Structure

- **index.html:** The main HTML file containing the structure of the web page.
- **style.css:** The stylesheet file defining the visual appearance of the application.
- **main.js:** The main JavaScript file responsible for handling user input, making API requests, and updating the UI.
- **weather.js:** A module handling the retrieval and parsing of weather data.
- **iconMap.js and iconMapNight.js:** Modules defining mappings between weather codes and corresponding icons for day and night, respectively.

## Usage

1. Enter a city name or zip code in the search box.
2. Click the search button or press Enter.
3. View the current weather conditions, including temperature, humidity, wind speed, and more.
4. Observe the dynamic background and weather icon based on the time of day.

## Notes

- The application uses the OpenWeatherMap API for retrieving weather data and the IPGeolocation API for obtaining time zone information based on geographical coordinates.

- Icons for weather conditions are stored in the "icons" directory and are dynamically loaded based on the current weather.

- The project structure adheres to a modular approach, separating concerns such as UI updates, API requests, and icon mappings into distinct files (`main.js`, `weather.js`, `iconMap.js`, `iconMapNight.js`).

- The application leverages the Vite build tool, which enhances the development experience with features like a fast development server, hot module replacement (HMR), and efficient bundling for production. Ensure that you have Node.js and npm installed to manage dependencies and run the application locally.

- The design is responsive, adapting to different screen sizes. Media queries in the CSS (`style.css`) provide a pleasant user experience on both desktop and mobile devices.

- Users can input either a city name or a zip code to retrieve weather information, and the application dynamically adjusts its background and icon based on the time of day at the specified location.

- The footer serves as a copyright notice and provides a clear endpoint for users, enhancing the overall user experience.

- If you encounter any issues or have suggestions for improvements, feel free to open an issue or contribute to the project.

- This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.


## Author

[Akeel Butt](#) - This project is maintained by Akeel Butt.
