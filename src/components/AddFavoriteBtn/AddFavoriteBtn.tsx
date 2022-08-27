import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { AppDispatch, RootState } from '../../redux/store'
import { add, Favorite } from '../../redux/slices/favoritesSlice'

function AddFavoriteBtn(favorite: Favorite) {
  const theme: string = useSelector((state: RootState) => state.theme.theme)
  const favorites: Favorite[] = useSelector(
    (state: RootState) => state.favorites.items
  )
  const dispatch = useDispatch<AppDispatch>()

  return (
    <button
      onClick={() => dispatch(add(favorite))}
      disabled={
        favorites.some((item) => item.name.common === favorite.name.common)
          ? true
          : false
      }
      className={`${
        theme === 'dark'
          ? 'bg-greyishBlueLight text-darkerBlue border-greyishBlueLight md:hover:bg-darkBlue md:hover:text-greyishBlueLight'
          : 'bg-darkerBlue text-greyishBlueLight border-darkerBlue md:hover:bg-greyishBlue md:hover:text-darkerBlue'
      } disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:pointer-events-none disabled:line-through font-bold rounded w-max px-4 py-2 border-2 md:transition-all`}
    >
      ADD
    </button>
  )
}
export default AddFavoriteBtn
