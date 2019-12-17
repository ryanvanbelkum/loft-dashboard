import React, {useEffect, useState} from "react"
import color from 'randomcolor';
import moment from 'moment';
import NewsCard from './news-card';
import useInterval from '../hooks/useInterval';

import './news.scss';
import ReactCSSTransitionGroup from "react-addons-css-transition-group"

const ONE_SEC = 1000;
const TWENTY_SEC = 20000;
const HALF_HOUR = 1.8e+6;

const URL = 'https://nostalgic-panini-628d13.netlify.com/.netlify/functions/news';

const News = () => {
  const [news, setNews] = useState([]);
  const [index, setIndex] = useState(0);
  const [time, setTime] = useState(moment());

  const fetchNews = () => {
    fetch(URL)
      .then((response) => response.json())
      .then((response) => setNews(response.articles.map(article => ({
        ...article,
        color: color({
          luminosity: 'light',
          format: 'rgba',
          alpha: 0.1
        })
      }))))
  };

  useEffect(() => {
    fetchNews();
  }, []);

  useInterval(() => {
    fetchNews();
  }, HALF_HOUR);

  useInterval(() => {
    setTime(moment());
  }, ONE_SEC);

  useInterval(() => {
    const end = news.length - 1;
    const newIndex = index === end ? 0 : index + 1;
    setIndex(newIndex);
  }, TWENTY_SEC);

  if(!news.length){
    return null;
  }

  const currentArticle = news[index];

  return (
    <div className="news">
      <p className="news__time">{time.format('LT')}</p>
      <ReactCSSTransitionGroup
        transitionName="news__transition"
        transitionEnterTimeout={2000}
        transitionLeaveTimeout={2000}>
          <NewsCard article={currentArticle} key={index} />
      </ReactCSSTransitionGroup>
    </div>
  )
}

export default News
