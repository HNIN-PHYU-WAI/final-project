import React from "react";
import FormattedDate from "./FormattedDate";

import "./weatherInfo.css"

export default function WeatherInfo(props){
  return (
    <div className="WeatherInfo">
      <div className="text-center">
        <h3 className=" mt-3">
          {props.data.city},{props.data.country}
        </h3>
        <ul className="text-capitalize">
          <li>
            <FormattedDate time={props.data.time * 1000} />
          </li>
          <li>{props.data.description}</li>
        </ul>
      </div>
      <div className="row mt-3">
        <div className="col-6">
          <div className="d-flex weather-temperature">
            <img
              src={props.data.imageUrl}
              alt="weather-icon"
              id="icon"
              width={70}
              height={70}
            />
            <span>
              <strong>{Math.round(props.data.temperature)}°C</strong>
            </span>
          </div>
        </div>
        <div className="col-6">
          <div className="card border-secondary">
            <div className="card-body">
              <div className="condition">Humidity: {props.data.humidity}%</div>
              <div className="condition">Wind:{props.data.wind}km/hr</div>
            </div>
          </div>
        </div>
      </div>
      <footer className=" text-center">
        <div className="card border-secondary mt-3">
          <div className="card-body">
            <strong>
              Feels-Like{""} :{""} {Math.round(props.data.feelsLike)}°C
            </strong>
          </div>
        </div>
      </footer>
    </div>
  );
}
