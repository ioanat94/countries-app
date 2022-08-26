import React from 'react'
import { useDispatch } from 'react-redux'
import { toggle } from '../../redux/slices/sliderSlice'

function FavoritesHeader() {
  const dispatch = useDispatch()

  return (
    <div className='flex items-center justify-between text-greyishBlue border-b border-b-greyishBlue h-[80px]'>
      FAVORITES
      <button
        onClick={() => dispatch(toggle())}
        onKeyDown={() => dispatch(toggle())}
      >
        <img
          src={require('../../assets/arrow-white.png')}
          alt='Back arrow'
          className='w-8 cursor-pointer'
        />
      </button>
    </div>
  )
}
export default FavoritesHeader
