import React from 'react'
import './BannerMiddle.css'
import Botao from '../components/Botao'
import Carrossel from '../components/Carrossel'

function BannerMiddle() {
  return (
    <section className='banner-middle'>
        <div className='div-title-banner-middle'>
            <h2>Where Comfort Meets Convenience — Our Top Stay Picks for You
            </h2>
            <Botao texto='Book Now'/>
        </div>
        <div className='div-carousel'>
            <Carrossel/>
        </div>
    </section>
  )
}

export default BannerMiddle
