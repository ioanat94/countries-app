import React from 'react'

import FavoritesHeader from '../FavoritesHeader/FavoritesHeader'
import FavoritesRow from '../FavoritesRow/FavoritesRow'

function FavoritesSlider() {
  return (
    <div className='bg-darkerBlue text-2xl px-6 h-full min-w-full fixed top-0 right-0 invisible md:min-w-[400px]'>
      <FavoritesHeader />
      <FavoritesRow />
      <FavoritesRow />
      <FavoritesRow />
    </div>
  )
}
export default FavoritesSlider
