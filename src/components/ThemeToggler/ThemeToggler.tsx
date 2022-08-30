import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { AppDispatch, RootState } from '../../redux/store'
import { toggleTheme } from '../../redux/slices/themeSlice'
import LightTheme from '../../assets/light.png'
import DarkTheme from '../../assets/dark.png'

function ThemeToggler() {
  const theme: string = useSelector((state: RootState) => state.theme.theme)
  const dispatch = useDispatch<AppDispatch>()

  return (
    <button
      onClick={() => dispatch(toggleTheme())}
      onKeyDown={() => dispatch(toggleTheme())}
    >
      <img
        src={theme === 'dark' ? LightTheme : DarkTheme}
        alt='Theme icon'
        className='min-w-[32px] max-w-[32px] cursor-pointer'
      />
    </button>
  )
}
export default ThemeToggler
