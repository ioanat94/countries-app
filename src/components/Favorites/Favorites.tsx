import React from 'react'

import EmptyHeart from '../../assets/heart-empty.png'
import FullHeart from '../../assets/heart-full.png'

function Favorites() {
  return (
    <div className='relative self-start mr-4 top-10 right-5 md:self-auto md:top-0 md:right-0'>
      <img
        src={EmptyHeart}
        alt='Empty heart icon'
        className='min-w-[32px] max-w-[32px]'
        onMouseOver={(e) => (e.currentTarget.src = `${FullHeart}`)}
        onMouseLeave={(e) => (e.currentTarget.src = `${EmptyHeart}`)}
        onFocus={(e) => (e.currentTarget.src = `${FullHeart}`)}
      />
      <span className='absolute -top-3 -right-4 flex justify-center w-7 h-7 text-white text-base bg-red-600 border border-darkerBlue rounded-full'>
        2
      </span>
    </div>
  )
}

export default Favorites
