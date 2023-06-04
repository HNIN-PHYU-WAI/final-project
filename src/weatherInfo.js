import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props){
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate time={props.data.time*1000} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="d-flex weather-temperature">
            <img
              src={props.data.imageUrl}
              alt="weather-icon"
              id="icon"
              width={100}
              height={100}
            />
            <span>
              <strong>{Math.round(props.data.temperature)}°C</strong>
            </span>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
