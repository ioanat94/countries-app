import React from 'react'
import { Link } from 'react-router-dom'

function FavoritesRow() {
  return (
    <div className='flex items-center justify-between py-6 text-greyishBlueLight'>
      <div className='flex items-center gap-4'>
        <img
          src='https://flagcdn.com/w320/fi.png'
          alt='Country flag'
          className='w-20'
        />
        <Link to={`/countries/1`} className='hover:underline text-xl'>
          Finland
        </Link>
      </div>
      <img
        src={require('../../assets/remove.png')}
        alt=''
        className='w-6 cursor-pointer'
      />
    </div>
  )
}
export default FavoritesRow
