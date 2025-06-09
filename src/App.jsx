import React from 'react'
import Hero from './components/Home/Hero'
import Services from './components/Home/Services'

const App = () => {
  return (
    <div className='px-4 py-4 sm:px-12'>
      <Hero></Hero>
      <Services></Services>
    </div>
  )
}

export default App