import React from 'react'
import AboutBlurb from './AboutBlurb'
import Logo from './Logo'
import CoverPic from './CoverPic'
import Navbar from '../nav/Navbar.js'


const Home = () => {
    return (
      <>
        <Navbar />
        <CoverPic />
        <div className="about">
          <AboutBlurb/>
        </div>
        <div className="banner">
          <Logo className="logo"/>
        </div>
      </>
    )
}

export default Home
