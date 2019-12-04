import * as React from 'react'
import '../../css/main.css'
import { Link } from '@reach/router'
import RealLogo from '../logo'

function Hero() {
  return (
      <Link className="hero text-center" to="/" >
        <RealLogo />
        <h1>Your new home is <span className="estate">Here</span>.</h1>
        <p>We will help you find the best prices in your region</p>
      </Link>
  )
}

export default Hero