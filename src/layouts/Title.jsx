import React from 'react'
import BotaoTransparente from '../components/BotaoTransparente'
import './Title.css'

function Title() {
  return (
    <div className='div-title'>
        <h3>Recommended Destination</h3>
        <BotaoTransparente className="button" text="View More"/>
    </div>
  )
}

export default Title
