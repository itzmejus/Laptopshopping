import React from 'react';
import Top from '../Images/top_img.png'

import '../Styles/Homepage.css'
function Homepage() {
  
    return (
        <div class="head_top">
        <section class="banner_main">
        <div class="container-fluid">
          <div class="row d_flex">
            <div class="col-md-5">
              <div class="text-bg">
                <h1>Computer and
                  <br>
                  </br>laptop shop</h1>
                <strong>Buy any laptop</strong>
                <span>Landing Page </span>
                <a href="#">Buy Now</a>
              </div>
            </div>
            <div class="col-md-7 padding_right1">
              <div class="text-img">
                <figure><img src={Top} alt="#" /></figure>
                <h3>01</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
    )
}

export default Homepage
