import React from 'react'
import { useDispatch } from 'react-redux'

import { Favorite, remove } from '../../redux/slices/favoritesSlice'

function RemoveFavoriteBtn(favorite: Favorite) {
  const dispatch = useDispatch()

  return (
    <button onClick={() => dispatch(remove(favorite.name.common))}>
      <img
        src={require('../../assets/remove.png')}
        alt=''
        className='w-6 cursor-pointer'
      />
    </button>
  )
}
export default RemoveFavoriteBtn
