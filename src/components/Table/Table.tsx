import React, { useEffect } from 'react'

import TableHead from '../TableHead/TableHead'
import TableRow from '../TableRow/TableRow'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { fetchCountriesThunk } from '../../redux/slices/countriesSlice'

function Table() {
  const dispatch = useDispatch()
  const { countries } = useSelector((state: RootState) => state)

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
