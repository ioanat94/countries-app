import React from 'react'
import { useSelector } from 'react-redux'

import { RootState } from '../../redux/store'
import CountryInfo from '../CountryInfo/CountryInfo'

function CountryCard() {
  const theme: string = useSelector((state: RootState) => state.theme.theme)

  return (
    // Wrapping divs to center card on page
    <div className='flex items-center justify-center pt-14 md:h-[calc(100vh-80px)] md:min-h-[450px] md:pt-0'>
      <div
        className={`${
          theme === 'dark' ? 'bg-greyishBlue' : 'bg-darkBlue'
        } flex flex-col items-center min-w-[90vw] mx-4 px-20 py-5 rounded-xl drop-shadow-2xl md:min-w-[50vw] md:pt-20 md:pb-10`}
      >
        <CountryInfo />
      </div>
    </div>
  )
}
export default CountryCard
