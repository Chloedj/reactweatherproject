import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";
import WeatherForecast from "./WeatherForecast";

export default function WeatherInfo(props) {
    return (
        <div className="weatherInfo">
        <div className="weather-app-data">
                    <div>
                        <h1 className="weather-app-city" id="city">{props.data.city}</h1>
                        <p className="weather-app-details">
                            <span id="time">
                                <FormattedDate date={props.data.date} /></span>,{" "}
                            <span id="description" className="text-capitalize">{props.data.description}</span>
                            <br />
                            Humidity: <strong id="humidity">{Math.round(props.data.humidity)}</strong>%, Wind:{" "}
                            <strong id="wind-speed">{Math.round(props.data.wind)}</strong> km/h
                        </p>
                    </div>
                    <div className="weather-app-temperature-container">
                        <img src={props.data.iconUrl} alt={props.data.description} id="icon" className="weather-app-icon" />
                        <WeatherTemperature celsius={props.data.temperature} />
                        </div>
                </div>
                <WeatherForecast coords={props.data.coordinates}/>
                </div>
            
    )
}