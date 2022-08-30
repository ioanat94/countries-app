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

  const isInCart = favorites.some(
    (item) => item.name.common === favorite.name.common
  )

  const handleAddToFav = () => {
    dispatch(add(favorite))
  }

  return (
    <button
      onClick={handleAddToFav}
      disabled={isInCart}
      className={`btn ${theme === 'dark' ? 'btn-dark' : 'btn-light'}`}
    >
      ADD
    </button>
  )
}
export default AddFavoriteBtn
