import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { AppDispatch, RootState } from '../../redux/store'
import { toggleSlider } from '../../redux/slices/sliderSlice'
import FavoritesIcon from '../FavoritesIcon/FavoritesIcon'
import Search from '../Search/Search'
import ThemeToggler from '../ThemeToggler/ThemeToggler'

function Navbar() {
  const theme: string = useSelector((state: RootState) => state.theme.theme)
  const isOpen: boolean = useSelector((state: RootState) => state.slider.isOpen)
  const dispatch = useDispatch<AppDispatch>()

  return (
    <div
      className={`${
        theme === 'dark' ? 'bg-darkerBlue' : 'bg-greyishBlueLight'
      } h-40 flex items-center justify-between md:h-20 px-6 sticky top-0 z-50`}
    >
      <div className='flex flex-col gap-4 md:flex-row md:gap-8 md:items-center'>
        <Link
          to='/'
          className='flex items-center gap-4 md:gap-8'
          onClick={() => isOpen && dispatch(toggleSlider())}
          onKeyDown={() => isOpen && dispatch(toggleSlider())}
        >
          <img
            src={require('../../assets/globe.png')}
            alt='Website Logo'
            className='w-12'
          />
          <h1
            className={`${
              theme === 'dark' ? 'text-greyishBlueLight' : 'text-darkerBlue'
            } text-2xl`}
          >
            Countries
          </h1>
        </Link>
        <Search />
      </div>
      <div className='relative flex items-center gap-6 self-start top-8 right-20 md:self-auto md:top-0 md:right-4'>
        <ThemeToggler />
        <FavoritesIcon />
      </div>
    </div>
  )
}

export default Navbar
