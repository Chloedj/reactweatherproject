import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";


export default function WeatherForecast(props) {
  const [ready, setReady] = useState(false);
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
        let apiKey = "ab8e7ef210556986d1c9a75d6007b825";
    let longitude = props.coords.lon;
    let latitude = props.coords.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
  }, [props.coords]); 

  function handleResponse(response) {
    console.log(response.data);
    setForecast(response.data.daily);
    setReady(true);

  }

  if (ready) {
    console.log(forecast);
  return (
      <div className="WeatherForecast">
        <div className="row">
          {forecast.map(function (dailyForecast, index) {
            if (index < 5) { 
              return (
                <div key={index} className="col"> 
                  <WeatherForecastDay data={dailyForecast} /> 
                </div>
              );
            } else {
              return null; 
            }
          })}
        </div>
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
}