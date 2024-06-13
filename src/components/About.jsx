import React from 'react'
import image1 from '../assets/image/image1.svg'
import left from '../assets/image/Left.svg'
import right from '../assets/image/Right.svg'
import cover1 from '../assets/image/Cover1.svg'
import cover2 from '../assets/image/Cover2.svg'
import cover3 from '../assets/image/Cover3.svg'
import cover4 from '../assets/image/Cover4.svg'
import cover5 from '../assets/image/Cover5.svg'
import cover7 from '../assets/image/Cover7.svg'
const About = () => {
  return (
    <div className='about'>
      <div className='container'>
        <div className='about-container'>
          <div className='about-box'>
            <div className='about-wrap'>
              <img src={image1} alt="rasim" width={50} height={50} />
              <p className='about-text'>Dollie Blair</p>
            </div>
            <div className='about-img'>
              <img className='about-image' src={left} alt="rasm" width={28} height={28} />
              <img className='about-image' src={right} alt="rasm" width={28} height={28} />
            </div>
          </div>
          <div className='about-contact'>
            <div className='about-stel'>
              <img className='about-bold' src={cover1} alt="" width={180} height={130} />
              <p className='about-text-name'>A Brief History Of Creation</p>
              <div className='about-gren'>
                <span className='about-span'>80k views  ·  3 days ago</span>
                <strong className='about-span'>Dollie Blair</strong>
              </div>
            </div>
            <div className='about-stel'>
              <img className='about-bold' src={cover2} alt="" width={180} height={130} />
              <p className='about-text-name'>Selecting The Right Hotel</p>
              <div className='about-gren'>
                <span className='about-span'>123k views  ·  1 months ago</span>
                <strong className='about-span'>Dollie Blair</strong>
              </div>
            </div>
            <div className='about-stel'>
              <img className='about-bold' src={cover3} alt="" width={180} height={130} />
              <p className='about-text-name'>Asteroids</p>
              <div className='about-gren'>
                <span className='about-span'>11k views  ·  6 months ago</span>
                <strong className='about-span'>Dollie Blair</strong>
              </div>
            </div>
            <div className='about-stel'>
              <img className='about-bold' src={cover4} alt="" width={180} height={130} />
              <p className='about-text-name'>Telescopes 101</p>
              <div className='about-gren'>
                <span className='about-span'>11k views  ·  6 months ago</span>
                <strong className='about-span'>Dollie Blair</strong>
              </div>
            </div>
            <div className='about-stel'>
              <img className='about-bold' src={cover5} alt="" width={180} height={130} />
              <p className='about-text-name'>Medical Care Is Just</p>
              <div className='about-gren'>
                <span className='about-span'>18k views  ·  2 days ago</span>
                <strong className='about-span'>Dollie Blair</strong>
              </div>
            </div>
            <div className='about-stel'>
              <img className='about-bold' src={cover7} alt="" width={180} height={130} />
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

export default About