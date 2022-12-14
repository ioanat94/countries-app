import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { AppDispatch, RootState } from '../../redux/store'
import { Country } from '../../redux/slices/countriesSlice'
import { toggleSlider } from '../../redux/slices/sliderSlice'
import AddFavoriteBtn from '../AddFavoriteBtn/AddFavoriteBtn'

function TableRow({ flags, name, languages, population, region }: Country) {
  const theme = useSelector((state: RootState) => state.theme.theme)
  const isOpen = useSelector((state: RootState) => state.slider.isOpen)
  const dispatch = useDispatch<AppDispatch>()

  const handleToggleSlider = () => {
    isOpen && dispatch(toggleSlider())
  }

  return (
    <tr
      className={`tb-row ${theme === 'dark' ? 'tb-row-dark' : 'tb-row-light'}`}
    >
      <td className='min-w-[150px]'>
        <img src={flags.png} alt={`Flag of ${name}`} className='w-20' />
      </td>
      <td className='min-w-[150px]'>
        <Link
          to={`/countries/${name.common}`}
          className='hover:underline'
          onClick={handleToggleSlider}
          onKeyDown={handleToggleSlider}
        >
          {name.common}
        </Link>
      </td>
      <td className='min-w-[150px]'>
        <ul>
          {Object.values(languages).map((language) => (
            <li key={language}>{language}</li>
          ))}
        </ul>
      </td>
      <td className='min-w-[170px]'>{population.toLocaleString()}</td>
      <td className='min-w-[150px]'>{region}</td>
      <td className='w-20 min-w-[150px]'>
        <AddFavoriteBtn flags={flags} name={name} />
      </td>
    </tr>
  )
}
export default TableRow
