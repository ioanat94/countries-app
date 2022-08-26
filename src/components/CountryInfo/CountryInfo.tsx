import React from 'react'
import { useSelector } from 'react-redux'

import { RootState } from '../../redux/store'

function CountryInfo() {
  const theme = useSelector((state: RootState) => state.theme.theme)

  return (
    <div className='flex flex-col justify-center gap-10 pb-10 md:flex-row'>
      <img
        src='https://flagcdn.com/w320/fi.png'
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
              <td>Finland</td>
            </tr>
            <tr className='h-14'>
              <td className='font-bold'>Languages:</td>
              <td>
                <ul>
                  <li>Finnish</li>
                  <li>Swedish</li>
                </ul>
              </td>
            </tr>
            <tr className='h-14'>
              <td className='font-bold'>Population:</td>
              <td>5,530,719</td>
            </tr>
            <tr className='h-14'>
              <td className='font-bold'>Region:</td>
              <td>Europe</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
export default CountryInfo
