import React, {useState, useEffect} from "react"
import moment from 'moment';
import useInterval from '../hooks/useInterval';

import './coffee.scss';

const MIN = 60000;

const Coffee = () => {
  const [coffeeTimestamp, setCoffeeTimestamp] = useState(null);
  const fetchCoffeeTimestamp = () => {
    fetch('https://nostalgic-panini-628d13.netlify.com/.netlify/functions/coffee')
      .then((response) => response.json())
      .then((response) => setCoffeeTimestamp(response.lastMadeTimestamp))
  };

  useEffect(() => {
    fetchCoffeeTimestamp();
  }, []);
  useInterval(() => {
    fetchCoffeeTimestamp();
  }, MIN)

  const now = moment();
  const end = moment(coffeeTimestamp);
  const duration = moment.duration(now.diff(end));
  const hour = Math.floor(duration.asHours());
  const min = Math.floor(duration.asMinutes() % 60);

  return (
    <div className="coffee">
      <div className="coffee__container">
        <div className="machine">
          <div className="machine-top">
            <div className="machine-middle" />
          </div>
          <div className="machine-bottom" />
          <div className="hand" />
          <div className="left-hand" />
          <div className="coffee" />
        </div>
      </div>
      <p className="coffee__time">Fresh pot brewed {hour} hour(s) and {min} min(s) ago</p>
    </div>
  )
}

export default Coffee
