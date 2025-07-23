import React from 'react'
import './FotoCard.css'

function FotoCard(props) {
  return (
    <img className='img-card' src={props.link} alt="" />
  )
}

export default FotoCard
