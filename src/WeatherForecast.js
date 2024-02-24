import React from "react";
import "./WeatherForecast.css"
import axios from "axios";



export default function WeatherForecast(props) {

    function handleResponse(response) {
        console.log(response.data);
    }
    console.log(props);
    let apiKey="ab8e7ef210556986d1c9a75d6007b825";
    let longitude = props.coords.lon;
    let latitude = props.coords.lat;
    let ApiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

axios.get(ApiUrl).then(handleResponse);

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