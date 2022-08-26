import React from 'react'

function FavoritesHeader() {
  return (
    <div className='flex items-center justify-between text-greyishBlue border-b border-b-greyishBlue h-[80px]'>
      FAVORITES
      <img
        src={require('../../assets/arrow-white.png')}
        alt='Back arrow'
        className='w-8 cursor-pointer'
      />
    </div>
  )
}
export default FavoritesHeader
