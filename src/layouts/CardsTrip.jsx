import React from 'react'
import Card from '../components/Card'
import './CardsTrip.css'

function CardsTrip() {
  return (
    <div className='section-cards'>
      <Card 
      title='Caspian Sea Beach, Aktau'
      subtitle='A Unique Seaside Escape in Central Asia'
      price='1,580'
      country='Kazakhstan'
      flag='https://s.w.org/images/core/emoji/16.0.1/svg/1f1f0-1f1ff.svg'
      package='9'
      image='https://live.sociolib.com/nomad/wp-content/uploads/sites/15/2025/07/colin-watts-M1ObxvsWVhY.webp'/>
      <Card 
      title='Pink Beach, Komodo Island'
      subtitle='A Rare Natural Wonder with Blush-Toned Sand'
      price='2,550'
      country='Indonesia'
      flag='https://s.w.org/images/core/emoji/16.0.1/svg/1f1ee-1f1e9.svg'
      package='7'
      image='https://live.sociolib.com/nomad/wp-content/uploads/sites/15/2025/07/matheen-faiz-OcrTk7qXcdM.webp'/>
      <Card 
      title='Tanjung Bira, South Sulawesi'
      subtitle='White Sands and Turquoise Waters Away from the Crowds'
      price='3,750'
      country='Indonesia'
      flag='https://s.w.org/images/core/emoji/16.0.1/svg/1f1ee-1f1e9.svg'
      package='5'
      image='https://live.sociolib.com/nomad/wp-content/uploads/sites/15/2025/07/rayyu-maldives-Nbu3v_UDg6w.webp'/>
    </div>
  )
}

export default CardsTrip
