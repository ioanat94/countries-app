import React from 'react'
import { TableRowProps } from '../../types'
import AddFavoriteBtn from '../AddFavoriteBtn/AddFavoriteBtn'

function TableRow({ data }: TableRowProps) {
  return (
    <tr className='h-32 text-greyishBlue border-b border-greyishBlue'>
      <td className='min-w-[150px]'>
        <img src={data.flag} alt={`Flag of ${data.name}`} className='w-20' />
      </td>
      <td className='min-w-[150px]'>{data.name}</td>
      <td className='min-w-[150px]'>
        <ul className='list-disc'>
          {data.languages.map((language) => (
            <li>{language}</li>
          ))}
        </ul>
      </td>
      <td className='min-w-[150px]'>{data.population.toLocaleString()}</td>
      <td className='min-w-[150px]'>{data.region}</td>
      <td className='w-20 min-w-[150px]'>
        <AddFavoriteBtn />
      </td>
    </tr>
  )
}
export default TableRow
