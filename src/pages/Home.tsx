import React from 'react'

import FavoritesSlider from '../components/FavoritesSlider/FavoritesSlider'
import Navbar from '../components/Navbar/Navbar'
import Table from '../components/Table/Table'

function Home() {
  return (
    <div className='h-screen bg-darkBlue'>
      <Navbar />
      <Table />
      <FavoritesSlider />
    </div>
  )
}

export default Home
