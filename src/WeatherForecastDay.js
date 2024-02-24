import React from "react";

export default function WeatherForecastDay(props) {
    function formatDay() {
        let date = new Date(props.data.dt * 1000); 
        const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        let dayOfWeek = daysOfWeek[date.getDay()]; 
        return dayOfWeek; 
    }

    return (   
        <div>
    <div className="forecastDay">
                {formatDay()}
            </div>
            <img src={`https://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`} alt="Weather Icon"/>

            <div className="forecastTemp">
              <span className="forecastTempMax">{Math.round(props.data.temp.max)}</span>° <span className="forecastTempMin">{Math.round(props.data.temp.min)}</span>°
            </div> </div>
    )}
    