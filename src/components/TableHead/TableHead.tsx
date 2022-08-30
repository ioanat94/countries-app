import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { AppDispatch, RootState } from '../../redux/store'
import { sort } from '../../redux/slices/countriesSlice'

function TableHead() {
  const theme = useSelector((state: RootState) => state.theme.theme)
  const dispatch = useDispatch<AppDispatch>()

  const handleAToZ = () => {
    dispatch(sort('aToZ'))
  }

  const handleZToA = () => {
    dispatch(sort('zToA'))
  }

  const handleLowToHigh = () => {
    dispatch(sort('lowToHigh'))
  }

  const handleHighToLow = () => {
    dispatch(sort('highToLow'))
  }

  return (
    <thead
      className={`tb-head ${
        theme === 'dark' ? 'tb-head-dark' : 'tb-head-light'
      }`}
    >
      <tr>
        <td>Flag</td>
        <td>
          Name
          <button onClick={handleAToZ} className='w-6 ml-2'>
            <img
              src={require(`../../assets/arrow-up-${
                theme === 'dark' ? 'white' : 'black'
              }.png`)}
              alt='Sort by Name Descending'
            />
          </button>
          <button onClick={handleZToA} className='w-6'>
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
          <button onClick={handleLowToHigh} className='w-6 ml-2'>
            <img
              src={require(`../../assets/arrow-up-${
                theme === 'dark' ? 'white' : 'black'
              }.png`)}
              alt='Sort by Name Descending'
            />
          </button>
          <button onClick={handleHighToLow} className='w-6'>
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
