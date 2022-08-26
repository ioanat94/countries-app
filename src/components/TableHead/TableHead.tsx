import React from 'react'
import { useSelector } from 'react-redux'

import { RootState } from '../../redux/store'

function TableHead() {
  const theme = useSelector((state: RootState) => state.theme.theme)

  return (
    <thead
      className={`${
        theme === 'dark'
          ? 'text-greyishBlue border-greyishBlue'
          : 'text-darkBlue border-darkBlue'
      } h-20 text-lg font-semibold border-b`}
    >
      <tr>
        <td>Flag</td>
        <td>Name</td>
        <td>Languages</td>
        <td>Population</td>
        <td>Region</td>
        <td></td>
      </tr>
    </thead>
  )
}
export default TableHead
