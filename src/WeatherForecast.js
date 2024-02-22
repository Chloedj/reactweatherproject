import React from "react";
import "./WeatherForecast.css"



export default function WeatherForecast(props) {
    return (
        <div className="WeatherForecast">
            <div className="row">
                <div className="col">
                    <div className="forecastDay">Fri</div>
                    <img src="https://openweathermap.org/img/wn/10d@2x.png" alt="Weather Icon"/>
                    <div className="forecastTemp"><span className="forecastTempMax">19</span>° <span className="forecastTempMin">10</span>° </div>
                </div>
                

            </div>
            
        </div>
    )
}