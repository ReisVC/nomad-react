import React from 'react'
import './Botao.css'

function Botao(props) {
  return (
    <button className='btn-orange'>
        {props.texto}
    </button>
  )
}

export default Botao
