import React, {useEffect} from "react"

import './news.scss';

const News = () => {
  useEffect(() => {
    const url = 'https://newsapi.org/v2/top-headlines?' +
      'country=us&' +
      'apiKey=41f90b389f164017b9de66aed6468c0c';
    const req = new Request(url);
    fetch(req)
      .then((response) => response.json())
      .then((response) => console.log(response))
  }, []);

  return (
    <div className="news">
      <div className="news__card">

      </div>
    </div>
  )
}

export default News
