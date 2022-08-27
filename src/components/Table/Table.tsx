import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { AppDispatch, RootState } from '../../redux/store'
import { fetchCountriesThunk } from '../../redux/slices/countriesSlice'
import TableHead from '../TableHead/TableHead'
import TableRow from '../TableRow/TableRow'

function Table() {
  const { countries } = useSelector((state: RootState) => state)
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(fetchCountriesThunk())
  }, [dispatch])

  return (
    // Wrapping in div for overflow-auto to work
    <div className='px-10 py-10 overflow-auto xl:px-20'>
      <table className='border-collapse w-full'>
        <TableHead />
        <tbody>
          {
            countries.filteredItems.length > 0
              ? /* eslint-disable */
                countries.filteredItems.map((country) => (
                  <TableRow key={country.name.common} {...country} />
                ))
              : countries.items.map((country) => (
                  <TableRow key={country.name.common} {...country} />
                )) /* eslint-enable */
          }
        </tbody>
      </table>
    </div>
  )
}
export default Table
