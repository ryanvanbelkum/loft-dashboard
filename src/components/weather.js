import React, {useEffect, useState} from "react"
import useInterval from '../hooks/useInterval';

import './weather.scss';

const ICON_MAP = {
  'clear-day': 'sunny',
  'clear-night': 'starry',
  'rain': 'rainy',
  'snow': 'snowy',
  'sleet': 'snowy',
  'fog': 'cloudy',
  'cloudy': 'cloudy',
  'partly-cloudy-day': 'cloudy',
  'partly-cloudy-night': 'cloudy',
  'thunderstorm': 'stormy',
}

const BACKGROUND_MAP = {
  'clear-day': '#FFF',
  'clear-night': '#8e8e8e',
  'rain': '#e8e8e8',
  'snow': '#e8e8e8',
  'sleet': '#e8e8e8',
  'fog': '#c1c1c1',
  'cloudy': '#c1c1c1',
  'partly-cloudy-day': '#e8e8e8',
  'partly-cloudy-night': '#7b7b7b',
  'thunderstorm': '#8e8e8e',
}

const TEN_MIN = 600000;

const Weather = () => {
  const [weather, setWeather] = useState(null);
  const fetchWeather = () => {
    fetch('https://nostalgic-panini-628d13.netlify.com/.netlify/functions/weather')
      .then(res => res.json())
      .then(res => setWeather(res));
  }
  useEffect(() => {
    fetchWeather();
  }, []);

  useInterval(() => {
    fetchWeather();
  }, TEN_MIN);

  if(!weather){
    return null;
  }

  return (
    <div className="weather" style={{backgroundColor: BACKGROUND_MAP[weather.currently.icon]}}>
      <div className="weather__container">
        <div className={`icon ${ICON_MAP[weather.currently.icon]}`} />
      </div>
      <p className="weather__temp">{weather.currently.temperature}&deg;</p>
    </div>
  )
}

export default Weather
