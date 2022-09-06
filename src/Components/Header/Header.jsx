import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram,FaPhoneVolume } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { AiOutlineMail, AiOutlineShopping } from "react-icons/ai";
import logo from '../../assets/Images/logo1.png'
import './Header.scss';
import './Header.css';
import '../../assets/Style/index.scss';
import { Link } from 'react-router-dom';


const Header = () => {
return (
<div>
    <div className="top__header__sec">
        <div className="top__header__wrap">
            <div className="container">
                <div className="top__header__left">
                    <div className="mail">
                        <a href="#"><AiOutlineMail/></a>
                        <a href="#">info@hotmail.com</a>
                    </div>
                   <div className="phone">
                    <a href="#"><FaPhoneVolume/></a>
                   <a href="#">+8801700001111</a>
                   </div>
                    
                </div>
                <div className="top__header__right">
                    <ul>
                        <li><a href="#">
                                <FaFacebookF /></a></li>
                        <li><a href="#">
                                <FaTwitter /></a></li>
                        <li><a href="#">
                                <FaInstagram /></a></li>
                        <li><a href="#">
                                <BsLinkedin /></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div className="main__header">
        <div className="header__wrapper">
            <div className="container">
                <div className="header__left">
                    <div className="logo">
                        <img src={ logo } alt="" />
                    </div>
                </div>
                <div className="header__right">
                    <div className="menu">
                    <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/shop">Shop</Link></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact Us</a></li>
                    <li><Link to='/myaccount'>My Account</Link></li>
                    <li><a href="#"><AiOutlineShopping/></a></li>
                    </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
)
}

export default Header;