import React from 'react'
import Hero from './Hero/Hero'
import CTA from '../../components/CTA/CTA'
import Intro from './Intro/Intro'

const Home = () => {
  return (
    <div>
        <Hero/>
        <Intro/>
        <CTA/>
    </div>
  )
}

export default Home