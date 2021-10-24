import React from 'react'
import '../Styles/Navbar.css'
import Aboutimg from '../Images/about_img.png'
import Copyright from './Copyright'
function About() {
    return (
        <div id="about" class="about">
        <div class="container">
           <div class="row">
              <div class="col-md-12">
                 <div class="titlepage">
                    <h2>About Pcoint</h2>
                    <span>d to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum gener</span>
                 </div>
              </div>
           </div>
           <div class="row">
              <div class="col-md-8 offset-md-2 ">
                 <div class="about_box ">
                    <figure><img src={Aboutimg} alt="#"/></figure>
                    <a class="read_more" href="#">Read more</a>
                 </div>
              </div>
           </div>
        </div>
        <div id="" class="best">
         <div class="container">
            <div class="row">
               <div class="col-md-12">
                  <div class="titlepage">
                     <h2>Build With Best </h2>
                     <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</span>
                  </div>
               </div>
            </div>
            <div class="row">
               <div class="col-md-4">
                  <div class="best_box">
                     <h4>500GB <br/>Micro SD Card</h4>
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod t dolor in reprehenderit in voluptate velit</p>
                  </div>
               </div>
               <div class="col-md-4">
                  <div class="best_box">
                     <h4>100GB <br/> Internal Ram</h4>
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod t dolor in reprehenderit in voluptate velit</p>
                  </div>
               </div>
               <div class="col-md-4">
                  <div class="best_box">
                     <h4>100% <br/> High Quality</h4>
                     <p>Made by Justin Johnson</p>
                  </div>
               </div>
               <div class="col-md-12">
                  <a class="read_more" href="#">Read more</a>
               </div>
            </div>
         </div>
      </div>
      <Copyright/>
     </div>
     
    )
}

export default About
