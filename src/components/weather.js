import React, {useEffect, useState} from "react"
import humps from 'humps';

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
  'rain': '#c1c1c1',
  'snow': '#c1c1c1',
  'sleet': '#c1c1c1',
  'fog': '#c1c1c1',
  'cloudy': '#c1c1c1',
  'partly-cloudy-day': '#c1c1c1',
  'partly-cloudy-night': '#7b7b7b',
  'thunderstorm': '#8e8e8e',
}

const Weather = () => {
  const [weather, setWeather] = useState(null);
  useEffect(() => {
    fetch('https://nostalgic-panini-628d13.netlify.com/.netlify/functions/weather')
      .then(res => res.json())
      .then(res => humps.camelizeKeys(res))
      .then(res => setWeather(res));
  }, []);

  if(!weather){
    return null;
  }

  console.log(weather.current);

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
