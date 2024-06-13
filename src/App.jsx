
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Layout from './components/Layout'
import Hero from './components/Hero'
import Trending from './components/Trending'
import Subscriptions from './components/Subscriptions'
import Library from './components/Library'
import History from './components/History'
import Watchlater from './Watchlater'
import Favourites from './components/Favourites'
import Videoga from './components/Videoga'
import Music from './Music'
import Games from './components/Games'
import SHowmore from './SHowmore'

function App() {

  return (
    
    <>
    <div className='container-max'>
    <Header/>
    <div style={{display:"flex"}}>
    <Hero />
    <Routes>
    <Route path={'/'} element={<Layout />} />
    <Route path={'/trending'} element={<Trending />} />
    <Route path={'/Subscriptions'} element={<Subscriptions/>} />
    <Route path={'/library'} element={<Library/>} />
    <Route path={'/History'} element={<History/>} />
    <Route path={'/Watchlater'} element={<Watchlater/>} />
    <Route path={'/Favourites'} element={<Favourites/>} />
    <Route path={'/Videoga'} element={<Videoga/>} />
    <Route path={'/Music'} element={<Music/>} />
    <Route path={'/Games'} element={<Games/>} />
    <Route path={'/SHowmore'} element={<SHowmore/>} />
    </Routes>
    </div>
    </div>
    </>
  )
}

export default App
