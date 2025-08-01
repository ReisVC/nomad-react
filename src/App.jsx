import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './layouts/Header'
import Banner from './layouts/Banner'
import Title from './layouts/Title'
import CardsTrip from './layouts/CardsTrip'
import Upgrade from './layouts/Upgrade'
import BannerMiddle from './layouts/BannerMiddle'
import NextDestination from './layouts/NextDestination'
import FAQ from './layouts/FAQ'

function App() {

  return (
    <>
      <Header/>
      <main>
          <Banner/>
          <Title/>
          <CardsTrip/>
          <Upgrade/>
          <BannerMiddle/>
          <NextDestination/>
          <FAQ/>
      </main>
    </>
  )
}

export default App
