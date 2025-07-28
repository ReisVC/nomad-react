import React from 'react'
import './CardUpgrade.css'
import { FaSun } from "react-icons/fa";


function CardUpgrade(props) {
  return (
    <div className='card-upgrade'>
        <div className='card-header'>
            <div className='icon'>
                {props.icon}
            </div>
            {props.number}
        </div>
        <h3>{props.title}</h3>
        <p>{props.quote}</p>
    </div>
  )
}

export default CardUpgrade
