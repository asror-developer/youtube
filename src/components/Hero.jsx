import React from 'react'
import home from '../assets/image/home.svg'
import tredng from '../assets/image/tredng.svg'
import printer from '../assets/image/printer.svg'
import fayl from '../assets/image/fayl.svg'
import history from '../assets/image/history.svg'
import soat from '../assets/image/soat.svg'
import yulduz from '../assets/image/yulduz.svg'
import love from '../assets/image/love.svg'
import musk from '../assets/image/musk.svg'
import games from '../assets/image/games.png'
import strelka from '../assets/image/strelka.svg'
import image1 from '../assets/image/image1.svg'
import image2 from '../assets/image/image2.svg'
import image3 from '../assets/image/image3.svg'
import image4 from '../assets/image/image4.svg'
import image5 from '../assets/image/image5.svg'
import image6 from '../assets/image/image6.svg'

export default function Hero() {
  return (
    <div className='hero'>
      <div className='container'>
        <div className='hero-container'>
          
          <div className='hero-box'>
            <a className='hero-link2' href="">
              <img src={home} alt="rasim" width={20} height={20} />Home</a>
            <a className='hero-link' href="">
              <img src={tredng} alt="rasim" width={20} height={20} />Trending</a>
            <a className='hero-link1' href="">
              <img src={printer} alt="rasim" width={20} height={20} />Subscriptions</a>
            <a className='hero-link' href="">
              <img src={fayl} alt="rasim" width={20} height={20} />Library</a>
            <a className='hero-link' href="">
              <img src={history} alt="rasim" width={20} height={20} />History</a>
            <a className='hero-link' href="">
              <img src={soat} alt="rasim" width={20} height={20} />Watch later</a>
            <a className='hero-link' href="">
              <img src={yulduz} alt="rasim" width={20} height={20} />Favourites</a>
            <a className='hero-link' href="">
              <img src={love} alt="rasim" width={20} height={20} />Liked videos</a>
            <a className='hero-link' href="">
              <img src={musk} alt="rasim" width={20} height={20} />Music</a>
            <a className='hero-link' href="">
              <img src={games} alt="rasim" width={20} height={20} />Games</a>
            <a className='hero-link' href="">
              <img src={strelka} alt="rasim" width={20} height={20} />Show more</a>
          </div>
          <div className='hero-name'>
            <p className='hero-text'>Subscriptions</p>
            <a className='hero-link' href="">
              <img src={image1} alt="rasim" width={20} height={20} />Gussie Singleton</a>
              <a className='hero-link' href="">
              <img src={image2} alt="rasim" width={20} height={20} />Nora Francis</a>
              <a className='hero-link' href="">
              <img src={image3} alt="rasim" width={20} height={20} />Belle Briggs</a>
              <a className='hero-link' href="">
              <img src={image4} alt="rasim" width={20} height={20} />Eunice Cortez</a>
              <a className='hero-link' href="">
              <img src={image5} alt="rasim" width={20} height={20} />Emma Hanson</a>
              <a className='hero-link' href="">
              <img src={image6} alt="rasim" width={20} height={20} />Leah Berry</a>
          </div>
        </div>
      </div>
    </div>
  )
}
