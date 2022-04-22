import './Routes.css'
import React from 'react'

const Home = ({ user }) => {
  return (
    <div className="home-container">
      <h1>Novellas for the Fellas</h1>
      <h2>Welcome, {user}</h2>
    </div>
  )
}

export default Home