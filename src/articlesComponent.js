import NewsCard from "./newsCard"
import './articlesComponent.css'
const Articles = (results) => {
  const newsArticles = results.newsPapers.map((result, index) => {
   return (
     <div key={index + 1}>
       <NewsCard 
       title={result.title} 
       key={index + 1} 
       date={result.created_date} 
       thumbNail={result.multimedia[2].url}
       articleInfo={result}
       id={result["created_date"]}
       />
     </div>
   )
  })
  
  return(
    <div className="newsContainer">
      {newsArticles}
    </div>
  )
}

export default Articles;