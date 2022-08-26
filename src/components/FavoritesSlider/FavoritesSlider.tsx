import React from 'react'
import { useSelector } from 'react-redux'

import { RootState } from '../../redux/store'
import FavoritesHeader from '../FavoritesHeader/FavoritesHeader'
import FavoritesRow from '../FavoritesRow/FavoritesRow'

function FavoritesSlider() {
  const isOpen = useSelector((state: RootState) => state.slider.isOpen)

  return (
    <div
      className={`bg-darkerBlue text-2xl px-6 h-full min-w-full fixed top-0 right-0 transition-all ${
        isOpen ? 'visible' : 'invisible'
      } md:min-w-[400px]`}
    >
      <FavoritesHeader />
      <FavoritesRow />
      <FavoritesRow />
      <FavoritesRow />
    </div>
  )
}
export default FavoritesSlider
