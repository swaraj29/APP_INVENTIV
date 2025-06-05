import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import RecognitionBar from '../components/RecognitionBar'
import ComponenyStats from '../components/CompanyStats'
const HomePage = () => {
  return (
    <div>
      <Header />
      <Hero/> 
      <RecognitionBar/>
      <ComponenyStats />
    </div>
  )
}

export default HomePage