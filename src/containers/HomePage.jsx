import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import RecognitionBar from '../components/RecognitionBar'
import ComponenyStats from '../components/CompanyStats'
import CaseStudyCard from '../components/CaseStudyCard'
import ClientVoices from '../components/ClientVoices'
import Services from '../components/Services'
import Future_Tech from '../components/Future_Tech'
import Partners from '../components/Partners'
import AwardsCarousel from '../components/ AwardsCarousel'
import Testimonials from '../components/Testimonials'
import IndustriesGrid from '../components/IndustriesGrid';
import TechCapbilities from '../components/TechCapabilities'
import StrategicPartnersSection from '../components/StrategicPartnersSection'
import ConsultationForm from '../components/ConsultationForm'
import FAQAccordion from '../components/FAQAccordion'
import Footer from '../components/Footer'
import TopBanner from '../components/TopBanner'
import GlobalPresence from '../components/GlobalPresence'
const HomePage = () => {
  return (
    <div>
      <TopBanner />
      <Header />
      <Hero/> 
      <RecognitionBar/>
      <ComponenyStats />
      <CaseStudyCard />
      <ClientVoices/>
      <Services/>
      <Future_Tech />
      <Partners />
      <AwardsCarousel />
      <Testimonials />  
      <IndustriesGrid />
      <TechCapbilities />
      <StrategicPartnersSection />
      <ConsultationForm />
      <FAQAccordion/>
      <GlobalPresence />
      <Footer/>
    </div>
  )
}

export default HomePage