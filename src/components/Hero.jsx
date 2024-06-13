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
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <div className='hero'>
      <div className='container'>
        <div className='hero-container'>
          
          <div className='hero-box'>
            <Link className='hero-link2' to="/">
              <img src={home} alt="rasim" width={20} height={20} />Home</Link>
            <Link className='hero-link' to="/trending">
              <img src={tredng} alt="rasim" width={20} height={20} />Trending</Link>
            <Link className='hero-link1' to="/Subscriptions">
              <img src={printer} alt="rasim" width={20} height={20} />Subscriptions</Link>
            <Link className='hero-link' to="/library">
              <img src={fayl} alt="rasim" width={20} height={20} />Library</Link>
            <Link className='hero-link' to="/History">
              <img src={history} alt="rasim" width={20} height={20} />History</Link>
            <Link className='hero-link' to="/Watchlater">
              <img src={soat} alt="rasim" width={20} height={20} />Watch later</Link>
            <Link className='hero-link' to="/Favourites">
              <img src={yulduz} alt="rasim" width={20} height={20} />Favourites</Link>
            <Link className='hero-link' to="/Videoga">
              <img src={love} alt="rasim" width={20} height={20} />Liked videos</Link>
            <Link className='hero-link' to="/Music">
              <img src={musk} alt="rasim" width={20} height={20} />Music</Link>
            <Link className='hero-link' to="/Games">
              <img src={games} alt="rasim" width={20} height={20} />Games</Link>
            <Link className='hero-link' to="/SHowmore">
              <img src={strelka} alt="rasim" width={20} height={20} />Show more</Link>
          </div>
          <div className='hero-name'>
            <p className='hero-text'>Subscriptions</p>
            <Link className='hero-link' to="/trending">
              <img src={image1} alt="rasim" width={20} height={20} />Gussie Singleton</Link>
              <Link className='hero-link' to="/trending">
              <img src={image2} alt="rasim" width={20} height={20} />Nora Francis</Link>
              <Link className='hero-link' to="/trending">
              <img src={image3} alt="rasim" width={20} height={20} />Belle Briggs</Link>
              <Link className='hero-link' to="/trending">
              <img src={image4} alt="rasim" width={20} height={20} />Eunice Cortez</Link>
              <Link className='hero-link' to="/trending">
              <img src={image5} alt="rasim" width={20} height={20} />Emma Hanson</Link>
              <Link className='hero-link' to="/trending">
              <img src={image6} alt="rasim" width={20} height={20} />Leah Berry</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
