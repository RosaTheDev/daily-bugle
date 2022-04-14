const api = () => {
  return fetch(`https://api.nytimes.com/svc/topstories/v2/us.json?api-key=${process.env.REACT_APP_API_KEY}`) 
  .then(response => response.json())
}

export default api;