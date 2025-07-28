import React from 'react'
import './Upgrade.css'
import { FaSun } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { FaCamera } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import CardUpgrade from '../components/CardUpgrade'

function Upgrade() {
  return (
    <section className='section-improve'>
        <div className='div-title-improve'>
            <h3 className='title-improve'>Elevate Your Epic <br /> Adventures</h3>
            <p>We are a travel agency that specializes <br /> in customizing trips according to your <br /> preferences, needs, and desires</p>
        </div>
        <hr className='div-upgrade'/>
        <div className='div-cards-image'>
            <div className='cards-upgrade'>
              <CardUpgrade 
              title='Diving and Snorkeling'
              quote='The travel package includes lending services for diving and snorkeling equipment'
              number='01'
              icon={<FaSun/>}/>

              <CardUpgrade 
              title='Professional Tour Guide'
              quote='A professional tour guide is someone who can make your travel experience more enjoyable'
              number='02'
              icon={<FaUserAlt/>}/>

              <CardUpgrade 
              title='Memorable'
              quote='Every moment of yours is captured by professional photography staff provided by travel'
              number='03'
              icon={<FaCamera/>}/>

              <CardUpgrade 
              title='Easy and Comfort'
              quote='Travel agency provides complete and reliable travel packages lorem ipsum slopedia margin large'
              number='04'
              icon={<FaStar/>}/>
            </div>
            <div className='img-upgrade'>
            </div>
        </div>
    </section>
  )
}

export default Upgrade