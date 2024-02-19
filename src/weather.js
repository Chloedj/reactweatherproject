import React, { useState } from "react";
import './weather.css';
import FormattedDate from "./FormattedDate";
import axios from 'axios';

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ ready: false });
    

    function handleResponse(response) {
        console.log(response.data);
        setWeatherData({
            ready: true,
            temperature: response.data.main.temp,
            humidity: response.data.main.humidity,
            date: new Date(response.data.dt * 1000),
            description: response.data.weather[0].description,
            iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
            wind: response.data.wind.speed,
            city: response.data.name
        })

        
    }
    
    if (weatherData.ready) {
    return (
        <div className="weather-app">
            <header>
                <form className="search-form d-flex" id="search-form">
                    <input
                        type="search"
                        placeholder="Enter a city.."
                        required
                        id="search-form-input"
                        className="search-form-input"
                        autoFocus="on"
                    />
                    <input type="submit" value="Search" className="search-form-button" />
                </form>
            </header>
            <main>
                <div className="weather-app-data">
                    <div>
                        <h1 className="weather-app-city" id="city">{weatherData.city}</h1>
                        <p className="weather-app-details">
                            <span id="time">
                                <FormattedDate date={weatherData.date} /></span>,{" "}
                            <span id="description" className="text-capitalize">{weatherData.description}</span>
                            <br />
                            Humidity: <strong id="humidity">{Math.round(weatherData.humidity)}</strong>, Wind:
                            <strong id="wind-speed">{Math.round(weatherData.wind)}</strong> km/h
                        </p>
                    </div>
                    <div className="weather-app-temperature-container">
                        <img src={weatherData.iconUrl} alt={weatherData.description} id="icon" className="weather-app-icon" />

                        <div className="weather-app-temperature" id="temperature">{Math.round(weatherData.temperature)}</div>
                        <div className="weather-app-unit">°C</div>
                    </div>
                </div>
                <div className="weather-forecast" id="forecast"></div>
            </main>
        </div>
    )}
    else {
        const apiKey = "ab8e7ef210556986d1c9a75d6007b825";
    let city = "Northampton";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    }
}