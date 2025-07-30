import React from 'react'
import './Botao.css'

function BotaoTransparente(props) {
  return (
    <div>
      <button className='btn-white'>
            {props.text}
      </button>
    </div>
  )
}

export default BotaoTransparente
