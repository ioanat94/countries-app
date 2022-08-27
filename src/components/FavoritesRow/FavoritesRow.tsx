import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { RootState } from '../../redux/store'
import { Favorite } from '../../redux/slices/favoritesSlice'
import RemoveFavoriteBtn from '../RemoveFavoriteBtn/RemoveFavoriteBtn'
import { toggleSlider } from '../../redux/slices/sliderSlice'

function FavoritesRow(favorite: Favorite) {
  const theme = useSelector((state: RootState) => state.theme.theme)
  const isOpen = useSelector((state: RootState) => state.slider.isOpen)
  const dispatch = useDispatch()

  return (
    <div
      className={`${
        theme === 'dark' ? 'text-greyishBlueLight' : 'text-darkerBlue'
      } flex items-center justify-between py-6`}
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
          onClick={() => isOpen && dispatch(toggleSlider())}
          onKeyDown={() => isOpen && dispatch(toggleSlider())}
        >
          {favorite.name.common}
        </Link>
      </div>
      <RemoveFavoriteBtn {...favorite} />
    </div>
  )
}
export default FavoritesRow
