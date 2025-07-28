import React from 'react'
import './Carrossel.css'

function Carrossel() {
  return (
    <div id="multiCarousel" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">

    <div class="carousel-item active">
      <img src="https://via.placeholder.com/800x400?text=Imagem+1" alt="Imagem 1"/>
    </div>
    <div class="carousel-item">
      <img src="https://via.placeholder.com/800x400?text=Imagem+2" alt="Imagem 2"/>
    </div>
    <div class="carousel-item">
      <img src="https://via.placeholder.com/800x400?text=Imagem+3" alt="Imagem 3"/>
    </div>

  </div>

  <button class="carousel-control-prev" type="button" data-bs-target="#multiCarousel" data-bs-slide="prev">
    <span class="carousel-control-prev-icon"></span>
    <span class="visually-hidden">Anterior</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#multiCarousel" data-bs-slide="next">
    <span class="carousel-control-next-icon"></span>
    <span class="visually-hidden">Próximo</span>
  </button>
</div>
  )
}

export default Carrossel
