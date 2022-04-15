import { useEffect, useState } from "react";
import SingleArticleInfo from "./SingleArticleInfo/SingleArticleInfo";
const SingleArticle = ({ article }) => {

  const [news, setArticle] = useState();
  useEffect(() => {
    setArticle(article)
  }, [article])

  console.log(news)
  const singleArticle = () => {
    return(
      <SingleArticleInfo
        thumbnail={article.multimedia[1].url}
        abstract={article.abstract}
        byline={article.byline}
        newDate={newDate}
        url={article.url}
        />
    )
  }
  let newDate = article.created_date.split('T').reverse().pop();

  return (
   <div>
     {news ? singleArticle() : <p>sorry not found</p>}
   </div>
  )
}

export default SingleArticle