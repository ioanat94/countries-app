import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { RootState } from '../../redux/store'
import { TableRowProps } from '../../types'
import AddFavoriteBtn from '../AddFavoriteBtn/AddFavoriteBtn'

function TableRow({ data }: TableRowProps) {
  const theme = useSelector((state: RootState) => state.theme.theme)

  return (
    <tr
      className={`${
        theme === 'dark'
          ? 'text-greyishBlueLight border-greyishBlue'
          : 'text-darkerBlue border-darkBlue'
      } h-32 border-b`}
    >
      <td className='min-w-[150px]'>
        <img src={data.flag} alt={`Flag of ${data.name}`} className='w-20' />
      </td>
      <td className='min-w-[150px]'>
        <Link to={`/countries/${data.id}`} className='hover:underline'>
          {data.name}
        </Link>
      </td>
      <td className='min-w-[150px]'>
        <ul className='list-disc'>
          {data.languages.map((language) => (
            <li key={language}>{language}</li>
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
