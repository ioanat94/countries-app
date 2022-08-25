import React from 'react'
import TableHead from '../TableHead/TableHead'
import dummyData from '../../dummyData'
import TableRow from '../TableRow/TableRow'

function Table() {
  return (
    <div className='px-10 py-10 overflow-auto xl:px-20'>
      <table className='border-collapse w-full'>
        <TableHead />
        <tbody className='text-greyishBlueLight'>
          {dummyData.map((data) => (
            <TableRow key={data.id} data={data} />
          ))}
        </tbody>
      </table>
    </div>
  )
}
export default Table
