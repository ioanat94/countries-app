import React from 'react'
import { Link } from 'react-router-dom'

import FavoritesIcon from '../FavoritesIcon/FavoritesIcon'
import Search from '../Search/Search'

function Navbar() {
  return (
    <div className='h-40 flex items-center justify-between bg-darkerBlue md:h-20 px-6'>
      <div className='flex flex-col gap-4 md:flex-row md:gap-8 md:items-center'>
        <Link to='/' className='flex items-center gap-4 md:gap-8'>
          <img
            src={require('../../assets/globe.png')}
            alt='Website Logo'
            className='w-12'
          />
          <h1 className='text-white text-2xl'>Countries</h1>
        </Link>
        <Search />
      </div>
      <FavoritesIcon />
    </div>
  )
}

export default Navbar
