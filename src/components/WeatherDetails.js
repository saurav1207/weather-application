import React from 'react';
import '../components/WeatherDetails.css';
import { FaThermometerHalf, FaTint, FaWind, FaCloud, FaTimes } from 'react-icons/fa';

const WeatherDetails = ({ weatherData, handleClear }) => {
  if (!weatherData) return null;

  const weatherCondition = weatherData.weather[0].main.toLowerCase();

  return (
    <div className={`weather-details-container ${weatherCondition}`}>
      <h2 className="weather-details-title">Weather Details for {weatherData.name}</h2>
      <div className="weather-details-content">
        <p><FaThermometerHalf />&nbsp;<strong>Temperature:</strong>&nbsp;{((weatherData.main.temp) - 273.15).toFixed(2)}°C</p>
        <p><FaTint />&nbsp;<strong>Humidity:</strong>&nbsp;{weatherData.main.humidity}%</p>
        <p><FaWind />&nbsp;<strong>Wind Speed:</strong>&nbsp;{((weatherData.wind.speed * 3.6).toFixed(2))} km/h</p>
        <p><FaCloud />&nbsp;<strong>Weather Condition:</strong>&nbsp;{weatherData.weather[0].description}</p>
      </div>
      <button className="clear-button" onClick={handleClear}><FaTimes /> Clear</button>
    </div>
  );
};

export default WeatherDetails;
