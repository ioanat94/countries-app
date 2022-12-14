import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { AppDispatch, RootState } from '../../redux/store'
import { toggleSlider } from '../../redux/slices/sliderSlice'
import FavoritesIcon from '../FavoritesIcon/FavoritesIcon'
import Search from '../Search/Search'
import ThemeToggler from '../ThemeToggler/ThemeToggler'

function Navbar() {
  const theme = useSelector((state: RootState) => state.theme.theme)
  const isOpen = useSelector((state: RootState) => state.slider.isOpen)
  const dispatch = useDispatch<AppDispatch>()

  const handleToggleSlider = () => {
    isOpen && dispatch(toggleSlider())
  }

  return (
    <div className={`nav ${theme === 'dark' ? 'nav-dark' : 'nav-light'}`}>
      <div className='flex flex-col gap-4 md:flex-row md:gap-8 md:items-center'>
        <Link
          to='/'
          className='flex items-center gap-4 md:gap-8'
          onClick={handleToggleSlider}
          onKeyDown={handleToggleSlider}
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
