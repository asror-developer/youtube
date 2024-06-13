import React from 'react'
import Hero from './Hero'
import About from './About'
import Contact from './Contact'
import Footer from './Footer'

const Layout = () => {
    return (
        <div className='stel-wrapper container'>
            
            <div>
                <About />
                 <Contact/>
                 <Footer/>
            </div>
            
        </div>
    )
}

export default Layout