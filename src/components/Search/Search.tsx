import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { AppDispatch, RootState } from '../../redux/store'
import { search } from '../../redux/slices/countriesSlice'

function Search() {
  const theme = useSelector((state: RootState) => state.theme.theme)
  const dispatch = useDispatch<AppDispatch>()
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }

  useEffect(() => {
    dispatch(search(searchTerm))
  }, [dispatch, searchTerm])

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
        onChange={handleSearch}
        className={`search ${
          theme === 'dark' ? 'search-dark' : 'search-light'
        }`}
      />
    </div>
  )
}

export default Search
