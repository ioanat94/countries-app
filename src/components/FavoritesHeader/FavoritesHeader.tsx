import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { AppDispatch, RootState } from '../../redux/store'
import { toggleSlider } from '../../redux/slices/sliderSlice'

function FavoritesHeader() {
  const theme: string = useSelector((state: RootState) => state.theme.theme)
  const dispatch = useDispatch<AppDispatch>()

  return (
    <div
      className={`${
        theme === 'dark'
          ? 'text-greyishBlue border-b-greyishBlue'
          : 'text-darkBlue border-b-darkBlue'
      } flex items-center justify-between border-b h-[80px]`}
    >
      FAVORITES
      <button
        onClick={() => dispatch(toggleSlider())}
        onKeyDown={() => dispatch(toggleSlider())}
      >
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
