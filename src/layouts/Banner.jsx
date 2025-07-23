import React from 'react'
import './Banner.css'
import VideoCard from '../components/VideoCard'
import { IoMdPlay } from "react-icons/io";


function Banner() {
  return (
    <section className='banner'>
        <div className='banner-title'>
            <h1>Less Hassle, <br /> More Fun.</h1>
            <p>Discover a new way to travel that’s fun, easy, and stress-free <br />Turn your dream destinations into unforgettable realities</p>
        </div>
        <div className='banner-img'>
            <VideoCard/>
        </div>
    </section>
  )
}

export default Banner
