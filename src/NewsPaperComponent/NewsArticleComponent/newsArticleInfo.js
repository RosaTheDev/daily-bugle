import { NavLink } from "react-router-dom";
import './NewsArticle.css'
const NewsArticle = ({thumbNail, title, id}) => {
  return(
    <div className="news-card">
      <img src={thumbNail} alt="A news article brought to you by the daily bugle"/>
      <p>{title}</p>
      <NavLink to={`/DailyBugle/ArticleId:/${id}`}>
        <button>View More</button>
      </NavLink>
    </div>
  )
}

export default NewsArticle; 