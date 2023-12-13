import React from 'react'
import './homeSecuritySolution.css'
import Navibar from '../../components/naveBar/Navbar'
import Button from 'react-bootstrap/Button';

function HomeSecuritySolution() {

  return (
    <div className='homeSecurity-main'>
        <Navibar/>
        <div className='homeSecurity-content'>
            <div className='homeSecurity-sidebattons'>
                <Button className='sidebar-button' variant="primary">
                    WiFi CCTV Camaras
                </Button>
                <Button className='sidebar-button' variant="primary">
                    WiFi Camara Systems
                </Button>
                <Button className='sidebar-button' variant="primary">
                    AHD Camaras
                </Button>
                <Button className='sidebar-button' variant="primary">
                    AHD Camara Systems
                </Button>
                <Button className='sidebar-button' variant="primary">
                    Motion Sensors
                </Button>
                <Button className='sidebar-button' variant="primary">
                    Home Security Systems
                </Button>
                <Button className='sidebar-button' variant="primary">
                    Child Safety
                </Button>

                
            </div>
        </div>
    </div>
  )
}

export default HomeSecuritySolution
