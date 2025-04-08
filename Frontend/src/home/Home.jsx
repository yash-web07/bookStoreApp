import React from 'react'
import Navbar from '../components/Navbar'
import Freebook from '../components/Freebook'
import Banner from '../components/Banner'
import Cards from '../components/Cards'
import Footer from '../components/Footer'

function Home() {
  return (
    <>
     <Navbar/>
      <Banner/>
      <Freebook/>
      <Cards/>
      <Footer/>
    </>
  )
}

export default Home