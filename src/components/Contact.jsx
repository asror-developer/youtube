import React from 'react'
import left from '../assets/image/Left.svg'
import right from '../assets/image/Right.svg'
import page from '../assets/image/page11.svg'
import page1 from '../assets/image/page3.svg'
const Contact = () => {
  return (
   <div className='contact'>
    <div className='container'>
      <div className='contact-container'>
        <div className='contact-box'>
          <h1 className='contact-title'>Recommended</h1>
          <div className='contact-img'>
          <img src={left} alt="rasim" width={28} height={28} />
          <img src={right} alt="rasim" width={28} height={28} />
          </div>
        </div>
        <div className='contact-wrap'>
        <div className='contact-name'>
          <img className='contact-stop' src={page} alt=" rasim" />
          <p className='contact-text'>Dude You Re Getting A Telescope</p>
            <span className='contact-span'>34k views  ·  5 months ago</span>
        </div>
        <div className='contact-name'>
          <img className='contact-stop' src={page1} alt=" rasim" />
          <p className='contact-text'>Dude You Re Getting A Telescope</p>
            <span className='contact-span'>34k views  ·  5 months ago</span>
        </div>
        <div className='contact-name'>
          <img className='contact-stop' src={page  } alt=" rasim" />
          <p className='contact-text'>Dude You Re Getting A Telescope</p>
            <span className='contact-span'>34k views  ·  5 months ago</span>
        </div>
        </div>
      </div>
    </div>
   </div>
  )
}

export default Contact