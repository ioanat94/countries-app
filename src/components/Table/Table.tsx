import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { AppDispatch, RootState } from '../../redux/store'
import { Country, fetchCountriesThunk } from '../../redux/slices/countriesSlice'
import TableHead from '../TableHead/TableHead'
import TableRow from '../TableRow/TableRow'
import Pagination from '../Pagination/Pagination'
import SkeletonTable from '../SkeletonTable/SkeletonTable'
import NoResults from '../NoResults/NoResults'

function Table() {
  const { countries } = useSelector((state: RootState) => state)

  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(fetchCountriesThunk())
  }, [dispatch])

  const handleRenderRows = (countries: Country[]) => {
    return countries.map((country) => (
      <TableRow key={country.name.common} {...country} />
    ))
  }

  // Pagination
  const [currentPage, setCurrentPage] = useState(1)
  const [countriesPerPage] = useState(25)

  const indexOfLastCountry = currentPage * countriesPerPage
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage
  const currentCountries = countries.items.slice(
    indexOfFirstCountry,
    indexOfLastCountry
  )

  const numberOfPages = Math.ceil(countries.items.length / countriesPerPage)

  const loadingCountries = countries.isLoading
  const noCountries = !loadingCountries && currentCountries.length === 0
  const foundCountries = !loadingCountries && currentCountries.length > 0

  return (
    <div className='px-10 py-10 flex flex-col gap-6 xl:px-20'>
      {/* Wrapping in div for overflow-auto to work */}
      <div className='overflow-auto'>
        <table className='min-h-[400px] border-collapse w-full'>
          <TableHead />
          <tbody>
            {loadingCountries && (
              <SkeletonTable countriesPerPage={countriesPerPage} />
            )}
            {noCountries && <NoResults />}
            {foundCountries && handleRenderRows(currentCountries)}
          </tbody>
        </table>
      </div>
      <Pagination
        numberOfPages={numberOfPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  )
}
export default Table
