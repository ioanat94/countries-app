import React from 'react'

function TableHead() {
  return (
    <thead className='h-20 text-greyishBlue text-lg font-semibold border-b border-greyishBlue'>
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
