import React, { useState } from "react";

export default function WeatherTemperature(props) {
    const [unit, setUnit] = useState("celsius");

    function convertToFarenheit(event) {
        event.preventDefault();
        setUnit("fahrenheit");
    }

    function convertToCelsius(event) {
        event.preventDefault();
        setUnit("celsius");
    }

    if (unit === "celsius") {
        return (
            
        <div className="weather-app-temperature-container">
        <div className="weather-app-temperature" id="temperature">{Math.round(props.celsius)}</div>
                        <div className="weather-app-unit">°C</div>
                        </div>
        );
    } else {let farenheit = (props.celsius * 9) / 5 + 32 
        return (
         
        <div className="weather-app-temperature-container">
        <div className="weather-app-temperature" id="temperature">{Math.round(farenheit)}</div>
                        <div className="weather-app-unit"><a href="/" onClick={convertToCelsius}>°C</a> | °F</div>
                        </div>
        );
    }}