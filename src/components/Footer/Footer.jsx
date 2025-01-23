import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <>
     <div className='footer' id='footer'>
        <div className='footer-content'>
            <div className='footer-content-left'>
                <h1>Foodie.</h1>
                {/* <img src={assets.logo} alt="" /> */}
                <p>Serving Deliciousness, One Bite at a Time! Your One-Stop Foodie Destination.There is Delight in Every Dish and Made with Passion, Served with Love.</p>
                <p>Follow us on our Social handles.</p>
                <div className="footer-social-icons">
                 <a href="">  <img src={assets.facebook_icon} alt="" />  </a>
                 <a href="">  <img src={assets.twitter_icon} alt="" />    </a>
                 <a href="">  <img src={assets.linkedin_icon} alt="" />  </a>
                </div>
            </div>
            <div className="footer-content-center">
               <h2>COMPANY</h2>
               <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
                </ul> 
            </div>
            <div className="footer-content-right">
             <h2>GET IN TOUCH</h2>
             <ul>
                <li>969563576</li>
                <li>yadavchandanr123@gmail.com</li>
             </ul>
            </div>
            
        </div>
        <hr />
        <p className="footer-copyright">Copyright © 2024 Foodie.com. All rights reserved.</p>
      
    </div>
    </>
  )
}

export default Footer