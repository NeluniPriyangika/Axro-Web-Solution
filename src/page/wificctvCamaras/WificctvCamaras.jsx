import {React, useState} from 'react'
import './wificctvCamaras.css'
import Card from 'react-bootstrap/Card';
import Navbar from '../../components/naveBar/Navbar';
import CCTVimg1 from '../../asesst/wirelesscctv1.png';
import CCTVimg2 from '../../asesst/wirelesscctv2.png';
import cctvbgimage from '../../asesst/cctvbgimage.png'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function WificctvCamaras() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [selectedCamera, setSelectedCamera] = useState(null);
  const cameras = [
    { id: 1, title: "1080p Wifi CCTV camara AXRO", description: "Some quick example text to build on the card title and make up the bulk of the card's content.I dont know about that what the fuk..!", camimg: CCTVimg1, minititle : "1080p Wifi CCTV camara AXRO", pixcel:"1080p", catagory:"WiFi", technology:"SD card", appiarance: "Ratatable" },
    { id: 2, title: "Camera 2", description: "Description for Camera 2", camimg: CCTVimg1, minititle : "camara 2", pixcel:"1000p", catagory:"WiFi", technology:"SD card", appiarance: "Ratatable" },
    { id: 3, title: "Camera 3", description: "Description for Camera 3", camimg: CCTVimg2, minititle : "camara 3", pixcel:"1090p", catagory:"WiFi", technology:"SD card", appiarance: "Ratatable" },
    { id: 4, title: "Camera 4", description: "Description for Camera 4", camimg: CCTVimg1, minititle : "camara 4", pixcel:"1070p", catagory:"WiFi", technology:"SD card", appiarance: "Ratatable" },
    { id: 5, title: "Camera 5", description: "Description for Camera 5", camimg: CCTVimg1, minititle : "camara 5", pixcel:"1060p", catagory:"WiFi", technology:"SD card", appiarance: "Ratatable" },
    { id: 6, title: "Camera 6", description: "Description for Camera 6", camimg: CCTVimg1, minititle : "camara 6", pixcel:"1050p", catagory:"WiFi", technology:"SD card", appiarance: "Ratatable" },
  ];

  return (
    <div className='wificam-main'>
      <Navbar/>
      <div className='wificam-content'>
        <div className='wificam-contentleft'>
          {cameras.map(camera => (
            <div className='wificam-card' key={camera.id} onClick={() => setSelectedCamera(camera)}>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={camera.camimg} />
                <Card.Body>
                  <Card.Title>{camera.title}</Card.Title>
                  <Card.Text>{camera.description}</Card.Text>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
        <div className='wificam-contentright' style={{ backgroundImage:`url(${cctvbgimage})`,backgroundRepeat:"no-repeat" }}>
            <h1>WiFi CCTV camaras</h1>
            <div className='wificam-contentrightdes'>
              {selectedCamera ? (
                <>
                  <div className='wificam-button'>
                    <Button className='contactsaller' variant="primary" onClick={handleShow}>Contact Saller</Button>
                      <Modal show={show} onHide={handleClose} className='modelback'>
                        <Modal.Header style={{backgroundColor:"black", color:'white'}} closeButton>
                          <Modal.Title>Contact seller here..</Modal.Title>
                        </Modal.Header>
                        <Modal.Body style={{backgroundColor:"black", color:'white'}}>
                          <h3>Phone : 0772044450</h3><br />
                          <h3>Email : info.wimaladarma@gmail.com</h3>
                        </Modal.Body>
                      </Modal>
                    <Button className='addtofav' variant="primary">Go somewhere</Button>
                  </div>
                  <div className='wificam-card1'>
                    <Card className='right-card' style={{ width: '40rem' }}>
                      <Card.Img variant="top" src={selectedCamera.camimg}/>
                      <Card.Body>
                        <Card.Title>{selectedCamera.title}</Card.Title>
                        <Card.Text>{selectedCamera.description}</Card.Text>
                      </Card.Body>
                    </Card>
                    <div className='wificam-description'>
                          <div className='wificam-description1'>
                            <h3>{selectedCamera.minititle}</h3>
                          </div>
                          <div className='wificam-description2'>{selectedCamera.pixcel}</div>
                          <div className='wificam-description1'>{selectedCamera.catagory}</div>
                          <div className='wificam-description2'>{selectedCamera.technology}</div>
                          <div className='wificam-description1'>{selectedCamera.appiarance}</div>
                    </div>
                  </div>
                  {/* Add more details as needed */}
                </>
              ) : (
                    <h1>Select a Camera</h1>
                  )}
                {/* Rest of your right side content */}
            </div>
          </div>
        </div>
    </div>
  )
}

export default WificctvCamaras
