import React, { FocusEvent } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { AppDispatch, RootState } from '../../redux/store'
import { toggleSlider } from '../../redux/slices/sliderSlice'
import EmptyHeart from '../../assets/heart-empty.png'
import FullHeart from '../../assets/heart-full.png'

function FavoritesIcon() {
  const count = useSelector((state: RootState) => state.favorites.count)
  const dispatch = useDispatch<AppDispatch>()

  const handleToggleSlider = () => {
    dispatch(toggleSlider())
  }

  const handleMouseOver = (e: React.MouseEvent<HTMLImageElement>) => {
    e.currentTarget.src = `${FullHeart}`
  }

  const handleMouseLeave = (e: React.MouseEvent<HTMLImageElement>) => {
    e.currentTarget.src = `${EmptyHeart}`
  }

  const handleFocus = (e: FocusEvent<HTMLImageElement>) => {
    e.currentTarget.src = `${FullHeart}`
  }

  return (
    <div className='relative top-1'>
      <button onClick={handleToggleSlider} onKeyDown={handleToggleSlider}>
        <img
          src={EmptyHeart}
          alt='Empty heart icon'
          onMouseOver={handleMouseOver}
          onMouseLeave={handleMouseLeave}
          onFocus={handleFocus}
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
