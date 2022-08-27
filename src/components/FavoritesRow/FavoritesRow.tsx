import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { RootState } from '../../redux/store'
import { Favorite } from '../../redux/slices/favoritesSlice'

function FavoritesRow(favorite: Favorite) {
  const theme = useSelector((state: RootState) => state.theme.theme)

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
        >
          {favorite.name.common}
        </Link>
      </div>
      <img
        src={require('../../assets/remove.png')}
        alt=''
        className='w-6 cursor-pointer'
      />
    </div>
  )
}
export default FavoritesRow
