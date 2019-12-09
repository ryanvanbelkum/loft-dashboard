import React from "react"
import moment from "moment";

const NewsCard = ({article, className}) => {
  if(!article){
    return null;
  }

  return (
    <div className="news__card" style={{backgroundColor: article.color}}>
      <h3>{article.title}</h3>
      <img src={article.urlToImage} />
      <p className="news__card__desc">{article.description}</p>
      <p className="news__card__by">{article.author}</p>
      <p className="news__card__date">{moment(article.publishedAt).format('LLL')}</p>
      <p className="news__card__text">{article.content}</p>
    </div>
  )
}

export default NewsCard
