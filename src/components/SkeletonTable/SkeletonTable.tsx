import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

type SkeletonProps = {
  countriesPerPage: number
}

function SkeletonTable({ countriesPerPage }: SkeletonProps) {
  const columns = [1, 2, 3, 4, 5, 6]
  const handleRenderColumns = () => {
    return columns.map(() => (
      <td>
        <Skeleton count={countriesPerPage} className='my-4' />
      </td>
    ))
  }

  return (
    <SkeletonTheme
      baseColor='#1a1b26'
      highlightColor='#c8cde3'
      duration={1}
      height='48px'
      width='200px'
    >
      <tr>{handleRenderColumns()}</tr>
    </SkeletonTheme>
  )
}
export default SkeletonTable
