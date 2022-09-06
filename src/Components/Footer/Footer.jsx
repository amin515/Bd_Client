import React from 'react';
import './Footer.scss';
import '../../assets/Style/index.scss';
const Footer = () => {
return (
<div>
    <div className="footer__sec">
        <div className="footer__wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <div className="footer__item">
                            <h3>Logo</h3>
                            <ul>
                                <li><a href="#">Financial Planing</a></li>
                                <li><a href="#">Financial Planing</a></li>
                                <li><a href="#">Financial Planing</a></li>
                                <li><a href="#">Financial Planing</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="footer__item">
                            <h3>Important Link</h3>
                            <ul>
                                <li><a href="#">Financial Planing</a></li>
                                <li><a href="#">Financial Planing</a></li>
                                <li><a href="#">Financial Planing</a></li>
                                <li><a href="#">Financial Planing</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="footer__item">
                            <h3>About Us</h3>
                            <ul>
                                <li><a href="#">Financial Planing</a></li>
                                <li><a href="#">Financial Planing</a></li>
                                <li><a href="#">Financial Planing</a></li>
                                <li><a href="#">Financial Planing</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="footer__item">
                            <h3>Contact US</h3>
                            <ul>
                                <li><a href="#">Address: 8th floor, 379 Hudson St, New</a></li>
                                <li><a href="#">York, NY 10018</a></li>
                                <li><a href="#">Phone: (+1) 96 716 6879</a></li>
                                <li><a href="#">Email: contact@site.com</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="footer__bottom">
        <div className="bottom__wrapper">
            <div className="container">
                <p>&copy; copyright All Right reserved <span><a href="#">Ecommerce</a></span></p>
            </div>
        </div>
    </div>
</div>
)
}

export default Footer;