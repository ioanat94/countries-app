import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { AppDispatch, RootState } from '../../redux/store'
import { Favorite } from '../../redux/slices/favoritesSlice'
import { toggleSlider } from '../../redux/slices/sliderSlice'
import RemoveFavoriteBtn from '../RemoveFavoriteBtn/RemoveFavoriteBtn'

function FavoritesRow(favorite: Favorite) {
  const theme = useSelector((state: RootState) => state.theme.theme)
  const isOpen = useSelector((state: RootState) => state.slider.isOpen)
  const dispatch = useDispatch<AppDispatch>()

  const handleToggleSlider = () => {
    isOpen && dispatch(toggleSlider())
  }

  return (
    <div
      className={`fav-row ${
        theme === 'dark' ? 'fav-row-dark' : 'fav-row-light'
      }`}
    >
      <div className='flex items-center gap-4'>
        <img
          src={`${favorite.flags.png}`}
          alt='Country flag'
          className='w-20'
        />
        <Link
          to={`/countries/${favorite.name.common}`}
          className='hover:underline text-xl'
          onClick={handleToggleSlider}
          onKeyDown={handleToggleSlider}
        >
          {favorite.name.common}
        </Link>
      </div>
      <RemoveFavoriteBtn {...favorite} />
    </div>
  )
}
export default FavoritesRow
