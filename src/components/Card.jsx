import React from 'react'
import './Card.css'
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoStarOutline } from "react-icons/io5";
import { FaUmbrellaBeach } from "react-icons/fa";


function Card(props) {
  return (
    <div className='card-trip'>
        <div className='card-body'>
            <div className='image-card' style={{backgroundImage: `url(${props.image})`}}>
                <div className='country-div'>
                    <div className='country-content'>
                        <img src={props.flag} alt="" />
                        <p>{props.country}</p>
                    </div>
                </div>
            </div>
        <h5>{props.title}</h5>
        <p>{props.subtitle}</p>
            <div className='trip-details'>
                <FaRegCalendarAlt className='ico-calendar'/>
                <span className='detail-calendar'>12 jun - 20 jun</span>
                <IoStarOutline className='ico-star'/>
                <span className='detail-rating'>5.0 Rating</span>
                {/* <FaUmbrellaBeach className='ico-beach'/>
                <span className='detail-beach'>Beach</span> */}
            </div>
        </div>
    </div>
  )
}

export default Card

// title='Caspian Sea Beach, Aktau'
//       subtitle='A Unique Seaside Escape in Central Asia'
//       price='1,580'
//       country='Kazakhstan'
//       flag='https://s.w.org/images/core/emoji/16.0.1/svg/1f1f0-1f1ff.svg'      
//       package='9'/>
//       image='https://live.sociolib.com/nomad/wp-content/uploads/sites/15/2025/07/colin-watts-M1ObxvsWVhY.webp'
