import React from 'react'

import FavoritesHeader from '../FavoritesHeader/FavoritesHeader'
import FavoritesRow from '../FavoritesRow/FavoritesRow'

function FavoritesSlider() {
  return (
    <div className='bg-darkerBlue text-2xl px-6 h-full min-w-full md:min-w-[400px] fixed top-0 right-0 translate-x-[100vw] md:translate-x-[400px] translate-x-[0]'>
      <FavoritesHeader />
      <FavoritesRow />
      <FavoritesRow />
      <FavoritesRow />
    </div>
  )
}
export default FavoritesSlider
