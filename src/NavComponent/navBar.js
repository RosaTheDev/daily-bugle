import React from 'react'
import { NavLink } from "react-router-dom";
import './navBar.css'

const NavBar = () => {
  return (
    <nav>
    <NavLink className="newYorkTimesBackButton" to ={'/'}>
        <button className="logo-button"><img className="logo-img" src="https://www.pngitem.com/pimgs/m/631-6315006_daily-bugle-black-and-white-hd-png-download.png" alt='spiderman workplace logo'/></button>
    </NavLink>
    <h1 className="header-title">The Daily Bugle</h1>
    <div className="search">
      <div className="search-container">
        <div className="searchInputWrapper">
          <input onChange={e => console.log(e)} className="searchInput" type="text" placeholder="Search by interest">
          </input>
        </div>
      </div>
    </div>
  </nav>
  )
}

export default NavBar;