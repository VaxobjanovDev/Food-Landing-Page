import React from 'react'
import Products from '../Products'
import HomeSection from '../HomeSection'
import Booking from '../Booking'
import Services from '../Services'
import FoodsCard from '../FoodsCard'
import DownloadApp from '../DownloadApp'
import Contact from '../Contact'

const HomeSectionHero = () => {
    return (
        <>
           <HomeSection/> 
           <Products/>
           <Booking/>
           <Services/>
           <FoodsCard/>
           <DownloadApp/>
           <Contact/>
        </>
    )
}

export default HomeSectionHero
