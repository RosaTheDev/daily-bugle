import { useEffect, useState } from "react";
const DetailedView = ({articles}) => {

  const [news, setArticle] = useState();
  useEffect(() => {
    setArticle(articles)
  },[articles]) 

  console.log(news)

  let newDate = articles.created_date.split('T').reverse().pop();

  return (
    <div>
      <img src={articles.multimedia[1].url} alt="Another thing you cant see"/>
      <p>{articles.abstract}</p>
      <p>{articles.byline}</p>
      <p>{newDate}</p>
      <a href={articles.url} target="_blank" rel="noreferrer">View full article here!</a>
    </div>
  )
}

export default DetailedView