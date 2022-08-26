import React from 'react'
import { useSelector } from 'react-redux'

import { RootState } from '../../redux/store'

function Search() {
  const theme = useSelector((state: RootState) => state.theme.theme)

  return (
    <div className='relative flex items-center'>
      <img
        src={require('../../assets/search.png')}
        alt='Search icon'
        className='absolute w-5 left-4'
      />
      <input
        type='search'
        placeholder='Search...'
        className={`${
          theme === 'dark' ? 'bg-darkBlue' : 'greyishBlue'
        } h-10 w-80 indent-12 rounded`}
      />
    </div>
  )
}

export default Search
