import React from 'react'
import Favorites from '../Favorites/Favorites'
import Search from '../Search/Search'

function Navbar() {
  return (
    <div className='h-40 flex items-center justify-between bg-darkerBlue md:h-20 px-6'>
      <div className='flex flex-col gap-4 md:flex-row md:gap-8 md:items-center'>
        <div className='flex items-center gap-4 md:gap-8'>
          <img
            src={require('../../assets/globe.png')}
            alt='Website Logo'
            className='w-12'
          />
          <h1 className='text-white text-2xl'>Countries</h1>
        </div>
        <Search />
      </div>
      <Favorites />
    </div>
  )
}

export default Navbar
