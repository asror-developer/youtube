import React from 'react'
import camer1 from '../assets/image/camer1.svg'
import camer2 from '../assets/image/camera2.svg'
import camer3 from '../assets/image/Camer3.svg'
import camer4 from '../assets/image/camer4.svg'
import camer5 from '../assets/image/camer5.svg'
import camer8 from '../assets/image/Camer3.svg'
import kuz from '../assets/image/kuz.svg'
import left from '../assets/image/Left.svg'
import right from '../assets/image/Right.svg'
const Footer = () => {
  return (
    <div className='about'>
      <div className='container'>
        <div className='about-container'>
          <div className='about-box'>
            <div className='about-wrap'>
              <img src={kuz} alt="rasim" width={50} height={50} />
              <p className='about-text'>Food & Drink</p>
              <p className='about-none'>Recommended channel for you</p>
            </div>
            <div className='about-main'>
              <p className='about-gold'>Subscribe 2.3m</p>
              <div className='about-img'>
              <img src={left} alt="rasm" width={28} height={28} />
              <img src={right} alt="rasm" width={28} height={28} />
            </div>
            </div>
            
          </div>
          <div className='about-contact'>
            <div className='about-stel'>
              <img className='about-bold' src={camer1} alt="" width={180} height={130} />
              <p className='about-text-name'>A Brief History Of Creation</p>
              <div className='about-gren'>
                <span className='about-span'>80k views  ·  3 days ago</span>
                <strong className='about-span'>Dollie Blair</strong>
              </div>
            </div>
            <div className='about-stel'>
              <img className='about-bold' src={camer2} alt="" width={180} height={130} />
              <p className='about-text-name'>Selecting The Right Hotel</p>
              <div className='about-gren'>
                <span className='about-span'>123k views  ·  1 months ago</span>
                <strong className='about-span'>Dollie Blair</strong>
              </div>
            </div>
            <div className='about-stel'>
              <img className='about-bold' src={camer3} alt="" width={180} height={130} />
              <p className='about-text-name'>Asteroids</p>
              <div className='about-gren'>
                <span className='about-span'>11k views  ·  6 months ago</span>
                <strong className='about-span'>Dollie Blair</strong>
              </div>
            </div>
            <div className='about-stel'>
              <img className='about-bold' src={camer4} alt="" width={180} height={130} />
              <p className='about-text-name'>Telescopes 101</p>
              <div className='about-gren'>
                <span className='about-span'>11k views  ·  6 months ago</span>
                <strong className='about-span'>Dollie Blair</strong>
              </div>
            </div>
            <div className='about-stel'>
              <img className='about-bold' src={camer5} alt="" width={180} height={130} />
              <p className='about-text-name'>Medical Care Is Just</p>
              <div className='about-gren'>
                <span className='about-span'>18k views  ·  2 days ago</span>
                <strong className='about-span'>Dollie Blair</strong>
              </div>
            </div>
            <div className='about-stel'>
              <img className='about-bold' src={camer8} alt="" width={180} height={130} />
              <p className='about-text-name'>Medical Care Is Just</p>
              <div className='about-gren'>
                <span className='about-span'>18k views  ·  2 days ago</span>
                <strong className='about-span'>Dollie Blair</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer