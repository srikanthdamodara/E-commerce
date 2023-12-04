import React from 'react'
import "./Hero.css"
import Hand_Icon from "../Assests/hand_icon.png"
import arrow_icon from "../Assests/arrow.png"
import Hero_Image from "../Assests/hero_image.png"
const Hero = () => {
  return (
    <div className='hero'>
<div className='hero-left'>
<h2>NEW ARRIVALS ONLY</h2>
<div>
    <div className='hero-hand-icon'>
        <p>New</p>
        <img src={Hand_Icon} alt=""/>

    </div>
    <p>collections</p>
    <p>for everyone</p>

</div>
<div className='hero-latest-btn'>
    <div>
        Latest Collection
    </div>
    <img src={arrow_icon} alt=""/>
</div>
</div>
<div className='hero-right'>
    <img src={Hero_Image} alt=""/>


</div>
    </div>
  )
}

export default Hero