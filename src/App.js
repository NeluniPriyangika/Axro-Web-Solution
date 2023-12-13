import React from 'react';
import './App.css';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Home from './page/home/Home.jsx'
import HomeSecuritySolution from './page/homeSecuritySolution/HomeSecuritySolution.jsx';



function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/homeSecuritySolution" element={<HomeSecuritySolution />} />
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
