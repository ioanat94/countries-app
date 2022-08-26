import React from 'react'

import TableHead from '../TableHead/TableHead'
import TableRow from '../TableRow/TableRow'
import dummyData from '../../dummyData'

function Table() {
  return (
    // Wrapping in div for overflow-auto to work
    <div className='px-10 py-10 overflow-auto xl:px-20'>
      <table className='border-collapse w-full'>
        <TableHead />
        <tbody>
          {dummyData.map((data) => (
            <TableRow key={data.id} data={data} />
          ))}
        </tbody>
      </table>
    </div>
  )
}
export default Table
