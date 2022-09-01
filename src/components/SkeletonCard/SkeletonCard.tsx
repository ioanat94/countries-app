import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function SkeletonCard() {
  const columns = [1, 2, 3, 4]
  return (
    <div className='flex flex-col items-center'>
      <SkeletonTheme baseColor='#edf0fc' highlightColor='#23283d' duration={1}>
        <div className='flex flex-col justify-center items-center gap-10 pb-10 md:flex-row'>
          <Skeleton width='250px' height='200px' />
          <div>
            <table className='w-[300px]'>
              <tbody>
                {columns.map(() => (
                  <div className='flex gap-10'>
                    <Skeleton width='300px' height='30px' />
                  </div>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <Skeleton width='100px' height='50px' />
      </SkeletonTheme>
    </div>
  )
}
export default SkeletonCard
