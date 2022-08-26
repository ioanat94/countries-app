import React from 'react'
import { useSelector } from 'react-redux'

import { RootState } from '../../redux/store'
import FavoritesHeader from '../FavoritesHeader/FavoritesHeader'
import FavoritesRow from '../FavoritesRow/FavoritesRow'

function FavoritesSlider() {
  const isOpen = useSelector((state: RootState) => state.slider.isOpen)
  const theme = useSelector((state: RootState) => state.theme.theme)

  return (
    <div
      className={`${
        theme === 'dark' ? 'bg-darkerBlue' : 'bg-greyishBlueLight'
      } text-2xl px-6 h-full min-w-full fixed top-0 right-0 transition-all drop-shadow-2xl ${
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
