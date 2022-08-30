import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { AppDispatch, RootState } from '../../redux/store'
import { fetchCountryThunk } from '../../redux/slices/countriesSlice'
import AddFavoriteBtn from '../AddFavoriteBtn/AddFavoriteBtn'
import CountryInfoRow from '../CountryInfoRow/CountryInfoRow'

type ParamTypes = {
  param: string
}

export type ValueType = string | { [key: string]: string }

function CountryInfo() {
  const theme = useSelector((state: RootState) => state.theme.theme)
  const { countries } = useSelector((state: RootState) => state)
  const { param }: ParamTypes = useParams<ParamTypes>()
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(fetchCountryThunk(param))
  }, [dispatch, param])

  const { flags, name, languages, population, region } = countries.singleItem

  const columns: {
    [key: string]: string | ValueType
    label: string
    info: ValueType
  }[] = [
    { label: 'Name:', info: name.common },
    { label: 'Languages:', info: languages },
    { label: 'Population:', info: population.toLocaleString() },
    { label: 'Region:', info: region },
  ]

  return countries ? (
    <div className='flex flex-col items-center'>
      <div className='flex flex-col justify-center items-center gap-10 pb-10 md:flex-row'>
        <img src={flags.png} alt='Country flag' className='drop-shadow-2xl' />
        <div>
          <table
            className={`${
              theme === 'dark' ? 'text-darkBlue' : 'text-greyishBlue'
            }  w-[300px]`}
          >
            <tbody>
              {columns.map((column) => (
                <CountryInfoRow
                  key={column.label}
                  label={column.label}
                  info={column.info}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <AddFavoriteBtn flags={flags} name={name} />
    </div>
  ) : (
    <></>
  )
}
export default CountryInfo
