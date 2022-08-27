import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { sort } from '../../redux/slices/countriesSlice'
import { RootState } from '../../redux/store'

function TableHead() {
  const theme = useSelector((state: RootState) => state.theme.theme)
  const dispatch = useDispatch()

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
        <td>
          Name
          <button onClick={() => dispatch(sort('aToZ'))} className='w-6 ml-2'>
            <img
              src={require(`../../assets/arrow-up-${
                theme === 'dark' ? 'white' : 'black'
              }.png`)}
              alt='Sort by Name Descending'
            />
          </button>
          <button onClick={() => dispatch(sort('zToA'))} className='w-6'>
            <img
              src={require(`../../assets/arrow-down-${
                theme === 'dark' ? 'white' : 'black'
              }.png`)}
              alt='Sort by Name Ascending'
            />
          </button>
        </td>
        <td>Languages</td>
        <td>
          Population
          <button
            onClick={() => dispatch(sort('lowToHigh'))}
            className='w-6 ml-2'
          >
            <img
              src={require(`../../assets/arrow-up-${
                theme === 'dark' ? 'white' : 'black'
              }.png`)}
              alt='Sort by Name Descending'
            />
          </button>
          <button onClick={() => dispatch(sort('highToLow'))} className='w-6'>
            <img
              src={require(`../../assets/arrow-down-${
                theme === 'dark' ? 'white' : 'black'
              }.png`)}
              alt='Sort by Name Ascending'
            />
          </button>
        </td>
        <td>Region</td>
        <td></td>
      </tr>
    </thead>
  )
}
export default TableHead
