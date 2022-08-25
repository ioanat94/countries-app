import React from 'react'

import CountryCard from '../components/CountryCard/CountryCard'
import Navbar from '../components/Navbar/Navbar'

function Country() {
  return (
    <div className='h-screen bg-darkBlue'>
      <Navbar />
      <CountryCard />
    </div>
  )
}
export default Country
