import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { AppDispatch, RootState } from '../../redux/store'
import { Country, fetchCountriesThunk } from '../../redux/slices/countriesSlice'
import TableHead from '../TableHead/TableHead'
import TableRow from '../TableRow/TableRow'

function Table() {
  const { countries } = useSelector((state: RootState) => state)
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(fetchCountriesThunk())
  }, [dispatch])

  const isSearching = countries.filteredItems.length > 0

  const handleRenderRows = (countries: Country[]) => {
    return countries.map((country) => (
      <TableRow key={country.name.common} {...country} />
    ))
  }

  return (
    // Wrapping in div for overflow-auto to work
    <div className='px-10 py-10 overflow-auto xl:px-20'>
      <table className='border-collapse w-full'>
        <TableHead />
        <tbody>
          {isSearching
            ? handleRenderRows(countries.filteredItems)
            : handleRenderRows(countries.items)}
        </tbody>
      </table>
    </div>
  )
}
export default Table
