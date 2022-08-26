import React from 'react'
import { useSelector } from 'react-redux'

import { RootState } from '../redux/store'
import CountryCard from '../components/CountryCard/CountryCard'
import Navbar from '../components/Navbar/Navbar'

function Country() {
  const theme = useSelector((state: RootState) => state.theme.theme)

  return (
    <div
      className={`h-screen ${
        theme === 'dark' ? 'bg-darkBlue' : 'bg-greyishBlue'
      }`}
    >
      <Navbar />
      <CountryCard />
    </div>
  )
}
export default Country
