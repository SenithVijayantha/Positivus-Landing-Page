import React from 'react'
import Hero from './components/Home/Hero'
import Services from './components/Home/Services'
import CaseStudies from './components/Home/CaseStudies'
import WorkingProcess from './components/Home/WorkingProcess'

const App = () => {
  return (
    <div className=''>
      <Hero></Hero>
      <Services></Services>
      <CaseStudies></CaseStudies>
      <WorkingProcess></WorkingProcess>
    </div>
  )
}

export default App