import React, { useState } from "react";
import './weather.css';

import WeatherInfo from "./WeatherInfo";
import axios from 'axios';

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ ready: false });
    const [city, setCity] = useState(props.defaultCity);
    

    function handleResponse(response) {
        console.log(response.data);
        setWeatherData({
            ready: true,
            coordinates: response.data.coord,
            temperature: response.data.main.temp,
            humidity: response.data.main.humidity,
            date: new Date(response.data.dt * 1000),
            description: response.data.weather[0].description,
            iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
            wind: response.data.wind.speed,
            city: response.data.name
        })

        
    }

    function search(){
        const apiKey = "ab8e7ef210556986d1c9a75d6007b825";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
        }
    
function handleSubmit(event) {
event.preventDefault();
search(city)
}

function handleCityChange(event) {
    setCity(event.target.value);
    
}

    if (weatherData.ready) {
    return (
        <div className="weather-app">
            <header>
                <form className="search-form d-flex" id="search-form" onSubmit={handleSubmit}>
                    
                    <input
                        type="search"
                        placeholder="Enter a city.."
                        required
                        id="search-form-input"
                        className="search-form-input"
                        autoFocus="on"
                        onChange={handleCityChange}
                    />
                    <input type="submit" value="Search" className="search-form-button" />
                </form>
            </header>
            <WeatherInfo data={weatherData}/>
         </div>
            
    )}
    else {
        search();
        return "Loading..."
    }
}