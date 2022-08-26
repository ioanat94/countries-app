import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { toggleTheme } from '../../redux/slices/themeSlice'
import { RootState } from '../../redux/store'
import LightTheme from '../../assets/light.png'
import DarkTheme from '../../assets/dark.png'

function ThemeToggler() {
  const theme = useSelector((state: RootState) => state.theme.theme)
  const dispatch = useDispatch()

  return (
    <button
      onClick={() => dispatch(toggleTheme())}
      onKeyDown={() => dispatch(toggleTheme())}
    >
      <img
        src={theme === 'dark' ? LightTheme : DarkTheme}
        alt='Light theme icon'
        className='min-w-[32px] max-w-[32px] cursor-pointer'
      />
    </button>
  )
}
export default ThemeToggler
