
import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Navbar.css'
import Unknown from '../Images/unknown.jpg';
  import Logo from '../Images/logo.png'

function Navbar() {
  return (
    <div class="head_top">
      <div class="header">
        <div class="container">
          <div class="row">
            <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
              <div class="full">
                <div class="center-desk">
                  <div class="logo">
                    <Link to='/'>

                    <a ><img src={Logo} alt="#" /></a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-9 col-lg-9 col-md-9 col-sm-9">
              <nav class="navigation navbar navbar-expand-md navbar-dark ">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarsExample04">
                  <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                    <Link to='/'>
                      <a class="nav-link"> Home  </a>
                      </Link>
                    </li>
                    <li class="nav-item">
                      <Link to='/about'>

                      <a class="nav-link" >About</a>
                      </Link>
                    </li>
                    <li class="nav-item">
                      <Link to='contact'>

                      <a class="nav-link" >Contact us</a>
                      </Link>
                    </li>
                  </ul>
                  <div class="sign_btn"><a href="#">Sign in</a></div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- end header inner -->
      <!-- end header -->
      <!-- banner --> */}
      
    </div>

  )
}

export default Navbar


