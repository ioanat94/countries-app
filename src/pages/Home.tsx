import React from 'react'
import { useSelector } from 'react-redux'

import { RootState } from '../redux/store'
import FavoritesSlider from '../components/FavoritesSlider/FavoritesSlider'
import Navbar from '../components/Navbar/Navbar'
import Table from '../components/Table/Table'

function Home() {
  const theme: string = useSelector((state: RootState) => state.theme.theme)

  return (
    <div
      className={`${
        theme === 'dark' ? 'bg-darkBlue' : 'bg-greyishBlue'
      } min-h-screen`}
    >
      <Navbar />
      <Table />
      <FavoritesSlider />
    </div>
  )
}

export default Home
