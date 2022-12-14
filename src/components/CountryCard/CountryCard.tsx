import React from 'react'
import { useSelector } from 'react-redux'

import { RootState } from '../../redux/store'
import CountryInfo from '../CountryInfo/CountryInfo'

function CountryCard() {
  const theme = useSelector((state: RootState) => state.theme.theme)

  return (
    // Wrapping divs to center card on page
    <div className='flex items-center justify-center pt-14 md:h-[calc(100vh-80px)] md:min-h-[450px] md:pt-0'>
      <div
        className={`country-card ${
          theme === 'dark' ? 'country-card-dark' : 'country-card-light'
        }`}
      >
        <CountryInfo />
      </div>
    </div>
  )
}
export default CountryCard
