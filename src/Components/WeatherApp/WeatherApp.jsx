// import React from 'react'
import './WeatherApp.css';
import '../Assets/clear.png';
import cloud_icon from '../Assets/cloud.png';
import '../Assets/drizzle.png';
import humidity_icon from '../Assets/humidity.png';
import '../Assets/rain.png';
import search_icon from '../Assets/search.png';
import '../Assets/snow.png';
import wind_icon from '../Assets/wind.png';
import { useState } from 'react';

const api = {
  key: '4e10454bbe624439ffd0b2a1babe6c2c',
  base: 'https://api.openweathermap.org/data/2.5/',
};


function WeatherApp() {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState(null)

  const searchPressed = () => {

    fetch(`${api.base}weather?q=${search}&units=metric&appid=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setWeather(result);
      });
  };
  return (
    <>
      <div className='container'>
        <p>Weather App</p>
        <div className="top-bar">
          <input type='text' className='cityInput' placeholder='Search'
            onChange={(event) => setSearch(event.target.value)}
          />
          <div className='search-icon' onClick={searchPressed} >
            <img src={search_icon} alt='' />
          </div>
        </div>

        <div className="weather-img">
          <img src={cloud_icon} alt="" />
        </div>
        {weather && (
          <>
            <div className="weather-temp">{weather.main ? `${weather.main.temp}°C` : 'Temperature not available'}</div>
            <div className="weather-location">{weather.name ? weather.name : 'Location not available'}</div>
          </>
        )}


        <div className="data-container">
          <div className="element">
            <img src={humidity_icon} alt='' className='icon' />
            <div className="data">
              <div className="humidity-percentage">{weather && weather.main ? `${weather.main.humidity}%` : ' %'}</div>
              <div className="text">Humidity</div>
            </div>
          </div>

          <div className="element">
            <img src={wind_icon} alt='' className='icon' />
            <div className="data">
              <div className="humidity-percentage">{weather && weather.wind ? `${weather.wind.speed} km/h` : ' km/hr'}</div>
              <div className="text">Wind Speed</div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}
export default WeatherApp