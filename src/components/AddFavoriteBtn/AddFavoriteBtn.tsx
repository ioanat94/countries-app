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
      className={`btn ${theme === 'dark' ? 'btn-dark' : 'btn-light'}`}
    >
      ADD
    </button>
  )
}
export default AddFavoriteBtn
