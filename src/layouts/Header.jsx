import React from 'react'
import './Header.css'
import Botao from '../components/Botao'
import BotaoTransparente from '../components/BotaoTransparente'

function Header() {
  return (
    <header className='header'>
      
      <div className="header-section left">
        <nav>
            <a href="#" id='home'>Home</a>
            <a href="#">Pages</a>
            <a href="#">Package</a>
            <a href="#">Destination</a>
        </nav>
      </div>
      <div className="header-section center">
        <img src="https://live.sociolib.com/nomad/wp-content/uploads/sites/15/2025/07/nomad-logo.png" alt="" />
      </div>
      <div className="header-section right">
        <div className='div-header'>
          <BotaoTransparente text="Blog"/>
          <Botao texto="Contact"/>
        </div>
      </div>
    </header>
  )
}

export default Header
