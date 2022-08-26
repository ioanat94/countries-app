import React from 'react'

import AddFavoriteBtn from '../AddFavoriteBtn/AddFavoriteBtn'
import CountryInfo from '../CountryInfo/CountryInfo'

function CountryCard() {
  return (
    // Wrapping divs to center card on page
    <div className='flex items-center justify-center h-full'>
      <div className='flex flex-col items-center bg-greyishBlue mx-4 px-20 pt-20 pb-10 rounded-xl drop-shadow-2xl'>
        <CountryInfo />
        <AddFavoriteBtn />
      </div>
    </div>
  )
}
export default CountryCard
