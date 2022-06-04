import React from 'react'
import Home from '../components/Home'
import Slider from '../components/Slider'
import Navigation from '../components/Navigation'
import TeamCard from '../components/TeamCard'

const HomePage = () => {
  return (
    <div>
      <Navigation />
      <Slider />
      <TeamCard />
    </div>
  )
}

export default HomePage