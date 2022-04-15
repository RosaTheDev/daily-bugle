import './newsCard.css'
import { NavLink } from 'react-router-dom';
const NewsCard = ({title, thumbNail, id}) => {
  return(
    <div className="card" >
      <img src={thumbNail} alt="A news article you cant see" />
      <p>{title}</p>
      <NavLink to={`/detailedView/${id}`}>
        <button>View More</button>
      </NavLink>
    </div>
  )
}

export default NewsCard;