import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './layouts/Header'
import Banner from './layouts/Banner'

function App() {

  return (
    <>
      <Header/>
      <main>
          <Banner/>
      </main>
    </>
  )
}

export default App
