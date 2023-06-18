import React from "react";
import Logo from '../pages/ProectIcons/logo_white.svg'
import './Footer.css'
// import { FaFacebook, FaTwitter } from 'react-icons/fa'

export const Footer = () => {
    return (
        <div className='footer'>
            <img alt='logo' className='logo' src={Logo}></img>
            <div className='footer-nav'>
                <ul>
                    <li>BREAKFAST</li>
                    <li>BRUNCH</li>
                    <li>LUNCH</li>
                    <li>DINNER</li>
                </ul>
            </div>
            <div className='footer-icons'>
                <p>©Icko Uzunov 2023 <br></br>Baby's Food Place</p>
            </div>
        </div>
    )
}