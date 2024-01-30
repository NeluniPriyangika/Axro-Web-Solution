import React from 'react'
import './homeSecuritySolution.css'
import Navibar from '../../components/naveBar/Navbar'
import Button from 'react-bootstrap/Button';
import {useNavigate} from 'react-router-dom';


function HomeSecuritySolution() {
    const navigate = useNavigate();

    const navigateToHomeSec1 = () => {
        // 👇️ navigate to /contacts
        navigate('/wificctvCamaras');
      };

  return (
    <div className='homeSecurity-main'>
        <Navibar/>
        <div className='homeSecurity-content'>
            <div className='homeSecurity-sidebattons'>
                <Button className='sidebar-button1' variant="primary" onClick={navigateToHomeSec1}>
                    WiFi CCTV Camaras
                </Button>
                <Button className='sidebar-button2' variant="primary">
                    WiFi Camara Systems
                </Button>
                <Button className='sidebar-button2' variant="primary">
                    AHD Camaras
                </Button>
                <Button className='sidebar-button2' variant="primary">
                    AHD Camara Systems
                </Button>
                <Button className='sidebar-button2' variant="primary">
                    Motion Sensors
                </Button>
                <Button className='sidebar-button2' variant="primary">
                    Home Security Systems
                </Button>
                <Button className='sidebar-button2' variant="primary">
                    Child Safety
                </Button>

                
            </div>
        </div>
    </div>
  )
}

export default HomeSecuritySolution
