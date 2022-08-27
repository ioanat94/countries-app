import React from 'react'
import { useSelector } from 'react-redux'

import { RootState } from '../../redux/store'
import { Favorite } from '../../redux/slices/favoritesSlice'
import FavoritesHeader from '../FavoritesHeader/FavoritesHeader'
import FavoritesRow from '../FavoritesRow/FavoritesRow'

function FavoritesSlider() {
  const isOpen: boolean = useSelector((state: RootState) => state.slider.isOpen)
  const theme: string = useSelector((state: RootState) => state.theme.theme)
  const favorites: Favorite[] = useSelector(
    (state: RootState) => state.favorites.items
  )

  return (
    <div
      className={`${
        theme === 'dark' ? 'bg-darkerBlue' : 'bg-greyishBlueLight'
      } text-2xl px-6 h-full min-w-full fixed top-0 right-0 transition-all drop-shadow-2xl ${
        isOpen ? 'visible' : 'invisible'
      } md:min-w-[400px] z-[99]`}
    >
      <FavoritesHeader />
      {favorites.length > 0 &&
        favorites.map((favorite) => (
          <FavoritesRow key={favorite.name.common} {...favorite} />
        ))}
    </div>
  )
}
export default FavoritesSlider
