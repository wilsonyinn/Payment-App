import React from 'react'
import Home from '../components/Home'
import Slider from '../components/Slider'
import Navigation from '../components/Navigation'
import Description from '../components/Description'

const HomePage = () => {
  return (
    <div>
      <Navigation />
      <Slider />
      <Description />
    </div>
  )
}

export default HomePage