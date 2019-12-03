import * as React from 'react'
import '../../css/main.css'
import { Link } from '@reach/router'

function Hero() {
  return (
      <Link className="hero text-center" to="/" >
        <h2 className="hero__logo"><span className="fas fa-home"></span>RealEstate</h2>
        <h1>Your new home is Here.</h1>
        <p>We will help you find the best prices in your region</p>
      </Link>
  )
}

export default Hero