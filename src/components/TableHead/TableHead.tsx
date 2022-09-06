import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Select from 'react-select'

import { AppDispatch, RootState } from '../../redux/store'
import { filterRegion, sort } from '../../redux/slices/countriesSlice'

type OptionType = {
  value: string
  label: string
}

function TableHead() {
  const { countries } = useSelector((state: RootState) => state)
  const theme = useSelector((state: RootState) => state.theme.theme)
  const dispatch = useDispatch<AppDispatch>()

  const [regionOptions, setRegionOptions] = useState<OptionType[]>([])

  const handleOptions = (regions: string[], options: OptionType[]) => {
    countries.countriesRef.map((item) => regions.push(item.region))
    const uniqueOptions = [...new Set(regions)]
    uniqueOptions.map((option) =>
      options.push({ value: option, label: option })
    )

    return options
  }

  const handleRegionClick = (e: any) => dispatch(filterRegion(e.value))
  const handleReset = () => {
    window.location.reload()
  }

  useEffect(() => {
    const regions: string[] = []
    const options: OptionType[] = []

    handleOptions(regions, options)
    setRegionOptions(options)
  }, [countries]) // eslint-disable-line react-hooks/exhaustive-deps

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
        <td>
          Region
          <Select
            options={regionOptions}
            onChange={handleRegionClick}
            className='text-darkBlue'
          />
        </td>
        <td>
          <button
            onClick={handleReset}
            className={`ml-10 px-3 py-1 border-2 ${
              theme === 'dark' ? 'border-greyishBlue' : 'border-darkBlue'
            }`}
          >
            Reset
          </button>
        </td>
      </tr>
    </thead>
  )
}
export default TableHead
