import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { AppDispatch, RootState } from '../../redux/store'
import { toggleSlider } from '../../redux/slices/sliderSlice'

function FavoritesHeader() {
  const theme: string = useSelector((state: RootState) => state.theme.theme)
  const dispatch = useDispatch<AppDispatch>()

  const handleToggleSlider = () => {
    dispatch(toggleSlider())
  }

  return (
    <div
      className={`fav-header ${
        theme === 'dark' ? 'fav-header-dark' : 'fav-header-light'
      }`}
    >
      FAVORITES
      <button onClick={handleToggleSlider} onKeyDown={handleToggleSlider}>
        <img
          src={require(`../../assets/arrow-${
            theme === 'dark' ? 'white' : 'black'
          }.png`)}
          alt='Back arrow'
          className='w-8 cursor-pointer'
        />
      </button>
    </div>
  )
}
export default FavoritesHeader
