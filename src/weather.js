import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./weatherInfo";

import "./weather.css";

export default function Weather(props) {
  let [city, setCity] = useState(props.defaultCity);
  let [weather, setWeather] = useState({ready:false});

  function showWeather(response){
    setWeather({
      ready: true,
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      description: response.data.condition.description,
      city: response.data.city,
      country: response.data.country,
      time: new Date(response.data.time),
      imageUrl: response.data.condition.icon_url,
      feelsLike: response.data.temperature.feels_like,
    });

  }

  function Search() {
    let key = "09ab3fdfc4a9o862fa2fea44052tffba";
    let unit = "metric";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${key}&units=${unit}`;

    axios.get(apiUrl).then(showWeather);
  }

  function handleSubmit(event) {
    event.preventDefault();
    Search();
  }
  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-9">
          <input
            type="search"
            placeholder="Search a city ....."
            className="form-control search-form"
            onChange={updateCity}
          />
        </div>
        <div className="col-3">
          <input type="submit" value="🔍" className="btn btn-branding button" />
        </div>
      </div>
    </form>
  );
  
  if (weather.ready){
    return (
      <div>
        {form}
        <WeatherInfo data={weather} />
      </div>
    ); 
  }else{
    Search();
    return(
      <div>loading...</div>
    );
  }
  
}
