import React from 'react'
import { useDispatch } from 'react-redux'

import { AppDispatch } from '../../redux/store'
import { Favorite, remove } from '../../redux/slices/favoritesSlice'

function RemoveFavoriteBtn(favorite: Favorite) {
  const dispatch = useDispatch<AppDispatch>()

  const handleRemoveFromFav = () => {
    dispatch(remove(favorite.name.common))
  }

  return (
    <button onClick={handleRemoveFromFav}>
      <img
        src={require('../../assets/remove.png')}
        alt=''
        className='w-6 cursor-pointer'
      />
    </button>
  )
}
export default RemoveFavoriteBtn
