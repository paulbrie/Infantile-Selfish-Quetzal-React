import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Infantile Selfish Quetzal</title>
        <meta property="og:title" content="Infantile Selfish Quetzal" />
      </Helmet>
      <span>Text</span>
    </div>
  )
}

export default Home
