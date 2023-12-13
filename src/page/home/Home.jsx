import React from 'react'
import './home.css'
import Navibar from '../../components/naveBar/Navbar'
import WebSlider from '../../page/webSlider/WebSlider'
import Servicers from "../../page/servicers/Servicers"

function Home() {
  return (
    <div className='home-main'>
        <Navibar/>
        <WebSlider />
        <Servicers />
    </div>
  )
}

export default Home
