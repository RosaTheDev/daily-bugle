const SingleArticleInfo = ({thumbnail, abstract, byLine, newDate, url}) => {
  return (
    <div>
      <img src={thumbnail} alt="Another thing you cant see" />
      <p>{abstract}</p>
      <p>{byLine}</p>
      <p>{newDate}</p>
      <a href={url} target="_blank" rel="noreferrer">View full article here!</a>
    </div>
  )
}

export default SingleArticleInfo;
