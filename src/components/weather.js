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
    fetch('https://api.darksky.net/forecast/d8be2b19a521f77df55dfd0a103e3c9b/39.767450,-94.849930?exclude=daily,minutely,alerts,flags,hourly')
      .then(res => res.json())
      .then(res => humps.camelizeKeys(res))
      .then(res => setWeather(res));
  }, []);
  const weatherCls = weather && ICON_MAP[weather.currently.icon];
  const bkColor = weather && BACKGROUND_MAP[weather.currently.icon];

  return (
    <div className="weather" style={{backgroundColor: bkColor}}>
      <div className="weather__container">
        <div className={`icon ${weatherCls}`} />
        {/*{JSON.stringify(weather)}*/}
      </div>
    </div>
  )
}

export default Weather
