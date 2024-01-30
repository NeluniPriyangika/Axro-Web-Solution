import React from 'react';
import './App.css';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Home from './page/home/Home.jsx'
import HomeSecuritySolution from './page/homeSecuritySolution/HomeSecuritySolution.jsx';
import WificctvCamaras from './page/wificctvCamaras/WificctvCamaras.jsx';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/homeSecuritySolution" element={<HomeSecuritySolution />} />
        <Route path="/wificctvCamaras" element={<WificctvCamaras />} />
      </Routes>
    </BrowserRouter>
  );
}


//<Router>
//           <Routes>
   //         <Route exact path="/home" element={<Home/>}/>
     //     </Routes>
       // </Router>

export default App;
