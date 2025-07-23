import React from 'react'
import FotoCard from './FotoCard'
import './VideoCard.css'
import { AiOutlinePlus } from "react-icons/ai";
import { IoMdPlay } from "react-icons/io";


function VideoCard() {
  return (
    <div className='div-card'>

        <div className='play'></div><IoMdPlay className='btn-play'/>
        <img id='bg-card' src="https://live.sociolib.com/nomad/wp-content/uploads/sites/15/2025/07/shifaaz-shamoon-_STLYdogRF4.webp" alt="" />
        <div className='itens-card'>
            <div className='fotos-card'>
                <FotoCard link='https://live.sociolib.com/nomad/wp-content/uploads/sites/15/2025/07/avatar2-1.png'/>
                <FotoCard link='https://live.sociolib.com/nomad/wp-content/uploads/sites/15/2025/07/avatar3-1.png'/>
                <FotoCard link='https://live.sociolib.com/nomad/wp-content/uploads/sites/15/2025/07/oliver-ragfelt-khV4fTy6-D8-unsplash-1.png'/>
                <p className='plus'><AiOutlinePlus/></p>
            </div>
            <p className='quote-card'>12K+ Membership <br /> enjoy our facility</p>
        </div>
    </div>
  )
}

export default VideoCard
