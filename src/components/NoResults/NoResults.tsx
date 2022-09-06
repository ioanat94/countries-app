import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'

function NoResults() {
  const theme = useSelector((state: RootState) => state.theme.theme)

  return (
    <div
      className={`absolute flex items-center justify-center w-[calc(100vw-80px)] h-[275px] ${
        theme === 'dark' ? 'text-greyishBlueLight' : 'text-darkerBlue'
      } text-2xl`}
    >
      No Results Found
    </div>
  )
}
export default NoResults
