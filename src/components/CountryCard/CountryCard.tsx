import React from 'react'
import { useSelector } from 'react-redux'

import { RootState } from '../../redux/store'
import AddFavoriteBtn from '../AddFavoriteBtn/AddFavoriteBtn'
import CountryInfo from '../CountryInfo/CountryInfo'

function CountryCard() {
  const theme = useSelector((state: RootState) => state.theme.theme)

  return (
    // Wrapping divs to center card on page
    <div className='flex items-center justify-center h-full'>
      <div
        className={`${
          theme === 'dark' ? 'bg-greyishBlue' : 'bg-darkBlue'
        } flex flex-col items-center mx-4 px-20 pt-20 pb-10 rounded-xl drop-shadow-2xl`}
      >
        <CountryInfo />
        <AddFavoriteBtn />
      </div>
    </div>
  )
}
export default CountryCard
