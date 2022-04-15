import { NavLink } from "react-router-dom";
import './NewsArticle.css'
const NewsArticle = ({thumbNail, title}) => {
  return(
    <div className="news-card">
      <img src={thumbNail} alt="A news article brought to you by the daily bugle"/>
      <p>{title}</p>
      <NavLink to={'/DailyBugle/insert_a_title_here'}>
        <button>View More</button>
      </NavLink>
    </div>
  )
}

export default NewsArticle; 