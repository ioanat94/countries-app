import React from 'react'

function Search() {
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
        className='h-10 w-80 indent-12 rounded bg-darkBlue'
      />
    </div>
  )
}

export default Search
