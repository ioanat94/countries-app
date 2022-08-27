import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { toggleSlider } from '../../redux/slices/sliderSlice'
import EmptyHeart from '../../assets/heart-empty.png'
import FullHeart from '../../assets/heart-full.png'
import { RootState } from '../../redux/store'

function FavoritesIcon() {
  const count = useSelector((state: RootState) => state.favorites.count)
  const dispatch = useDispatch()

  return (
    <div className='relative top-1'>
      <button
        onClick={() => dispatch(toggleSlider())}
        onKeyDown={() => dispatch(toggleSlider())}
      >
        <img
          src={EmptyHeart}
          alt='Empty heart icon'
          onMouseOver={(e) => (e.currentTarget.src = `${FullHeart}`)}
          onMouseLeave={(e) => (e.currentTarget.src = `${EmptyHeart}`)}
          onFocus={(e) => (e.currentTarget.src = `${FullHeart}`)}
          className='min-w-[32px] max-w-[32px] cursor-pointer'
        />
      </button>
      <span className='border-transparent text-greyishBlueLight absolute -top-3 -right-4 flex justify-center w-7 h-7 text-base font-bold bg-red-600 border rounded-full'>
        {count}
      </span>
    </div>
  )
}

export default FavoritesIcon
