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
      className={`fav-slider ${
        theme === 'dark' ? 'fav-slider-dark' : 'fav-slider-light'
      } ${isOpen ? 'visible' : 'invisible'}`}
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
