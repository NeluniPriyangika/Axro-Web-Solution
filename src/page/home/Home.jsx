import React from 'react'
import './home.css'
import Navbar from '../../components/naveBar/Navbar'
import WebSlider from '../../page/webSlider/WebSlider'
import Servicers from "../../page/servicers/Servicers"

function Home() {
  return (
    <div className='home-main'>
        <Navbar/>
        <WebSlider />
        <Servicers />
    </div>
  )
}

export default Home
