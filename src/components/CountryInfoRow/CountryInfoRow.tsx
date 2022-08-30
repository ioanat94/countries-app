import React from 'react'
import { ValueType } from '../CountryInfo/CountryInfo'

function CountryInfoRow({ label, info }: { label: string; info: ValueType }) {
  return (
    <tr className='h-14'>
      <td className='font-bold'>{label}</td>
      <td>
        {label === 'Languages:' ? (
          <ul>
            {Object.values(info).map((language) => (
              <li key={language}>{language}</li>
            ))}
          </ul>
        ) : (
          info
        )}
      </td>
    </tr>
  )
}
export default CountryInfoRow
