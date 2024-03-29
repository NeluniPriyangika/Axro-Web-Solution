import React from 'react'
import './servicers.css'
import { Link } from 'react-router-dom';

function Servicers() {
  return (
    <div class="wrap">

      <div class="tile">
        <Link to="/homeSecuritySolution"> 
          <img src='https://images.unsplash.com/photo-1464054313797-e27fb58e90a9?dpr=1&auto=format&crop=entropy&fit=crop&w=1500&h=996&q=80'alt=''/>
          <div class="text">
            <h1>Home Security Sloutions</h1>
            <h2 class="animate-text">More lorem ipsum bacon ipsum.</h2>
            <p class="animate-text">Bacon ipsum dolor amet pork belly tri-tip turducken, pancetta bresaola pork chicken meatloaf. Flank sirloin strip steak prosciutto kevin turducken. </p>
            <div class="dots">
                <span></span>
                <span></span>
                <span></span>
            </div>
          </div>
        </Link>
      </div>

      <div class="tile" > 
        <img src='https://images.unsplash.com/photo-1458668383970-8ddd3927deed?dpr=1&auto=format&crop=entropy&fit=crop&w=1500&h=1004&q=80' alt=''/>
        <div class="text">
          <h1>Software Development</h1>
          <h2 class="animate-text">More lorem ipsum bacon ipsum.</h2>
          <p class="animate-text">Bacon ipsum dolor amet pork belly tri-tip turducken, pancetta bresaola pork chicken meatloaf. Flank sirloin strip steak prosciutto kevin turducken. </p>
          <div class="dots">
              <span></span>
              <span></span>
              <span></span>
          </div>
        </div>
      </div>
  
      <div class="tile"> 
        <img src='https://images.unsplash.com/photo-1422393462206-207b0fbd8d6b?dpr=1&auto=format&crop=entropy&fit=crop&w=1500&h=1000&q=80' alt=''/>
        <div class="text">
          <h1>Innovations and Engineering</h1>
          <h2 class="animate-text">More lorem ipsum bacon ipsum.</h2>
          <p class="animate-text">Bacon ipsum dolor amet pork belly tri-tip turducken, pancetta bresaola pork chicken meatloaf. Flank sirloin strip steak prosciutto kevin turducken. </p>
          <div class="dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>

    </div>
  
  )
}

export default Servicers
