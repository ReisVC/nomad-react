import React from 'react'
import './NextDestination.css'
import Botao from '../components/Botao'
import Card from '../components/Card'

function NextDestination() {
  return (
    <div className='next-destination'>
      <h3>Uncover The Beauty Of Your <br />Next Destination</h3>
      <div className='div-next-destination'>
        <div className='div-image-next-destination'>
          <h4>Enjoy The Stunning <br /> Natural Beauty That <br />Awaits At Every <br />Destination.</h4>
          <Botao texto='View More Destinations' />
        </div>
        <div className='next-cards'>
          <Card
            title='Cavendish Beach'
            price='1,580'
            country='Ecuador'
            flag='https://s.w.org/images/core/emoji/16.0.1/svg/1f1ea-1f1e8.svg'
            package='9'
            image='https://live.sociolib.com/nomad/wp-content/uploads/sites/15/2025/07/hamdhulla-shakeeb-hw8m1BwRAvw.webp' />
          <Card
            title='Altai Mountains'
            price='1,580'
            country='Kazakhstan'
            flag='https://s.w.org/images/core/emoji/16.0.1/svg/1f1f0-1f1ff.svg'
            package='9'
            image='https://live.sociolib.com/nomad/wp-content/uploads/sites/15/2025/07/hamdhulla-shakeeb-jHwg0kVDOrk-1.webp' />
          <Card
            title='Senggigi Beach'
            price='1,580'
            country='Indonesia'
            flag='https://s.w.org/images/core/emoji/16.0.1/svg/1f1ee-1f1e9.svg'
            package='9'
            image='https://live.sociolib.com/nomad/wp-content/uploads/sites/15/2025/07/ahmed-yaaniu-RDnYlufMFAw.webp' />
          <Card
            title='Singing Sans Beach'
            price='1,580'
            country='Canada'
            flag='https://s.w.org/images/core/emoji/16.0.1/svg/1f1e8-1f1e6.svg'
            package='9'
            image='https://live.sociolib.com/nomad/wp-content/uploads/sites/15/2025/07/hamdhulla-shakeeb-Tu9KGqFClHc.webp' />
        </div>
      </div>
    </div>
  )
}

export default NextDestination
