import React from 'react'
import { useDispatch } from 'react-redux'

import { toggle } from '../../redux/slices/sliderSlice'
import EmptyHeart from '../../assets/heart-empty.png'
import FullHeart from '../../assets/heart-full.png'

function FavoritesIcon() {
  const dispatch = useDispatch()

  return (
    <div className='relative self-start mr-4 top-10 right-5 md:self-auto md:top-2 md:right-0'>
      <button
        onClick={() => dispatch(toggle())}
        onKeyDown={() => dispatch(toggle())}
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
      <span className='absolute -top-3 -right-4 flex justify-center w-7 h-7 text-white text-base bg-red-600 border border-darkerBlue rounded-full'>
        2
      </span>
    </div>
  )
}

export default FavoritesIcon
