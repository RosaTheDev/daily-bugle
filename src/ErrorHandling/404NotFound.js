import React from 'react'
import './404NotFound.css'
const LolNotFound = () => {
  return (
    <div className='error-container'>
      <h1 className='error-text'> I'm sorry but the page you are looking for is not found</h1>
      <img className='error-image' src='https://media4.giphy.com/media/6qFFgNgextP9u/giphy.gif?cid=790b7611cf5dfcaca38c7a1260a2d53d70602ebd48039501&rid=giphy.gif&ct=g' height={400} width={500} alt="sad kid becuse there are no movies found" />
    </div>
  )
}

export default LolNotFound; 