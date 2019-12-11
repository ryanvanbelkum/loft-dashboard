import React, {useState, useEffect, useCallback} from "react"
import moment from 'moment';
import useInterval from '../hooks/useInterval';
import firestore from "../firebase";

import './coffee.scss';

const MIN = 60000;

const Coffee = () => {
  const [lastUpdateTimestamp, setLastUpdateTimestamp] = useState(null);
  const [duration, setDuration] = useState(moment.duration());
  const calcDuration = useCallback(() => {
    const now = moment();
    const end = moment(lastUpdateTimestamp);
    const duration = moment.duration(now.diff(end));

    setDuration(duration);
  }, [lastUpdateTimestamp]);

  useEffect(() => {
    const unsub = firestore.collection("dashboard").onSnapshot(snapshot => {
      const dashboard = snapshot.docs.map(doc => ({ [doc.id]: doc.data() }))[0];
      const timestamp = dashboard.coffee.lastUpdateTimestamp;
      setLastUpdateTimestamp(timestamp);

      const now = moment();
      const end = moment(timestamp);
      const duration = moment.duration(now.diff(end));

      setDuration(duration);
    });

    return () => unsub();
  }, []);

  useInterval(() => {
    calcDuration();
  }, MIN)

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
