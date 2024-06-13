import React from 'react'
import menu from '../assets/image/Menu.svg'
import youtub from '../assets/image/Youtub.svg'
import video from '../assets/image/video.svg'
import asosiy from '../assets/image/asosiy.svg'
import blok from '../assets/image/ui-11.svg'
import userpic from '../assets/image/Userpic.svg'
import shape from '../assets/image/Shape.svg'
export default function Header() {
    return (
        <div className='header'>
            <div className='container'>
                <div className='header-container'>
                    <div className='header-box'>
                        <img className='header-pointer' src={menu} alt="logo" width={20} height={17} />
                        <img className='header-pointer'  src={youtub} alt="logo" width={116} height={19} />
                    </div>
                    <div className='header-name'>
                        <input className='header-input' type="text" required placeholder='Search' />
                        <img className='header-image' src={shape} alt="rasim" width={18} height={18} />
                    </div>
                    <div className='header-img'>
                        <img src={video} alt="logo" width={27} height={24} />
                        <img src={asosiy} alt="logo" width={27} height={24} />
                        <img src={blok} alt="logo" width={27} height={24} />
                        <img src={userpic} alt="" width={27} height={24} />
                    </div>
                </div>
            </div>
        </div>
    )
}
