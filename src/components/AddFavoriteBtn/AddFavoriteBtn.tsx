import React from 'react'
import { useSelector } from 'react-redux'

import { RootState } from '../../redux/store'

function AddFavoriteBtn() {
  const theme = useSelector((state: RootState) => state.theme.theme)

  return (
    <button
      className={`${
        theme === 'dark'
          ? 'bg-greyishBlueLight text-darkerBlue border-greyishBlueLight md:hover:bg-darkBlue md:hover:text-greyishBlueLight'
          : 'bg-darkerBlue text-greyishBlueLight border-darkerBlue md:hover:bg-greyishBlue md:hover:text-darkerBlue'
      } font-bold rounded w-max px-4 py-2 border-2 md:transition-all`}
    >
      ADD
    </button>
  )
}
export default AddFavoriteBtn
