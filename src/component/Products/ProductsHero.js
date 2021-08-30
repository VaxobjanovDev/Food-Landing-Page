import React from 'react'
import DownloadApp from '../DownloadApp'
import FoodsCard from '../FoodsCard'
import Products from '../Products'
import Services from '../Services'

const ProductsHero = () => {
    return (
        <>
          <Products/>
          <Services/>
          <DownloadApp/>  
        </>
    )
}

export default ProductsHero
