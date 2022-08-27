import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { fetchCountryThunk } from '../../redux/slices/countriesSlice'
import { RootState } from '../../redux/store'
import AddFavoriteBtn from '../AddFavoriteBtn/AddFavoriteBtn'

type ParamTypes = {
  name: string
}

function CountryInfo() {
  const theme = useSelector((state: RootState) => state.theme.theme)
  const dispatch = useDispatch()
  const { countries } = useSelector((state: RootState) => state)
  const { name } = useParams<ParamTypes>()

  useEffect(() => {
    dispatch(fetchCountryThunk(name))
  }, [dispatch, name])

  const country = countries.items[0]

  return country ? (
    <div className='flex flex-col items-center'>
      <div className='flex flex-col justify-center gap-10 pb-10 md:flex-row'>
        <img
          src={country.flags.png}
          alt='Country flag'
          className='drop-shadow-2xl'
        />
        <div>
          <table
            className={`${
              theme === 'dark' ? 'text-darkBlue' : 'text-greyishBlue'
            }  w-[300px]`}
          >
            <tbody>
              <tr className='h-14'>
                <td className='font-bold'>Name:</td>
                <td>{country.name.common}</td>
              </tr>
              <tr className='h-14'>
                <td className='font-bold'>Languages:</td>
                <td>
                  <ul>
                    {Object.values(country.languages).map((language) => (
                      <li key={language}>{language}</li>
                    ))}
                  </ul>
                </td>
              </tr>
              <tr className='h-14'>
                <td className='font-bold'>Population:</td>
                <td>{country.population.toLocaleString()}</td>
              </tr>
              <tr className='h-14'>
                <td className='font-bold'>Region:</td>
                <td>{country.region}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <AddFavoriteBtn flags={country.flags} name={country.name} />
    </div>
  ) : (
    <></>
  )
}
export default CountryInfo
