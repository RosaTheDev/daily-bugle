import NewsArticle from "./NewsArticleComponent/newsArticleInfo"
import './newsPaper.css'
const NewsPapers = ({newsArticles}) => {

  const dailyPaper = newsArticles.map((newsArticle, index) => {
    return (
     <NewsArticle
        key={index + 1}
        thumbNail={newsArticle.multimedia[2].url}
        title={newsArticle.title}
        id={newsArticle.created_date}
     />
    )
  })
  return(
    <div className="dailyPaper">
      {dailyPaper}
    </div>
  )

}

export default NewsPapers;