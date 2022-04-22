import './Components.css'
import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className="navBar">
      <nav>
        <ul>
          <li> <Link to="/Home">Home</Link> </li>
          <li> <Link to="/Library">Library</Link> </li>
          <li> <Link to="/Groups">Your Groups</Link> </li>
        </ul>
      </nav>
    </div>
  )
}

export default Nav