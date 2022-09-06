import React from 'react';
import './Shop.scss';
import chair from '../../assets/Images/chair.jpg';
import { AiOutlineShopping, AiOutlineHeart } from "react-icons/ai";
import { Link } from 'react-router-dom';
import SiteCanvas from '../../Components/SiteCanvas/SiteCanvas';

const Shop = () => {



return (
<div>
    <SiteCanvas />
    <div className="shop__sec">
        <div className="shop__wrapper">
            <h2>Shop</h2>
            <div className="container">

                <div className="shop__left">
                    <div className="select__item">
                        <div className="my-3">
                            <label htmlFor="Category">Category</label>
                            <select name="" id="">
                                <option value="Smart Watch">Smart Watch</option>
                                <option value="Smart Watch">Smart Watch</option>
                                <option value="Smart Watch">Smart Watch</option>
                                <option value="Smart Watch">Smart Watch</option>
                                <option value="Smart Watch">Smart Watch</option>
                            </select>
                        </div>
                        <div className="my-3">
                            <label htmlFor="Tag">Tag</label>
                            <select name="" id="">
                                <option value="Smart Watch">Smart Watch</option>
                                <option value="Smart Watch">Smart Watch</option>
                                <option value="Smart Watch">Smart Watch</option>
                                <option value="Smart Watch">Smart Watch</option>
                                <option value="Smart Watch">Smart Watch</option>
                            </select>
                        </div>
                        <div className="my-3">
                            <label htmlFor="Brand">Brand</label>
                            <select name="" id="">
                                <option value="Smart Watch">Smart Watch</option>
                                <option value="Smart Watch">Smart Watch</option>
                                <option value="Smart Watch">Smart Watch</option>
                                <option value="Smart Watch">Smart Watch</option>
                                <option value="Smart Watch">Smart Watch</option>
                            </select>
                        </div>
                    </div>
                    
                </div>
                <div className="shop__right">
                    <div className="product__section">
                        <div className="product__wrapper">

                            <div className="content">

                                <div className="product__item">
                                    <div className="producet__image">
                                        <img src={ chair } alt="" />
                                    </div>
                                    <div className="product__cart">
                                        <ul>

                                            <li>
                                                <Link to="/checkout"><span>BUY</span></Link>
                                            </li>
                                            <li>
                                                <a href="#" data-bs-toggle="offcanvas"
                                                    data-bs-target="#offcanvasScrolling"
                                                    aria-controls="offcanvasScrolling">
                                                    <AiOutlineShopping /></a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <AiOutlineHeart /></a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="quick__view">
                                        <Link to="/singlepage">
                                        <h5>Quick View</h5>
                                        </Link>
                                    </div>
                                    <div className="product__content">
                                        <h5>Nancy Chair</h5>
                                        <p>BDT : 3000</p>
                                    </div>
                                </div>
                                <div className="product__item">
                                    <div className="producet__image">
                                        <img src={ chair } alt="" />
                                    </div>
                                    <div className="product__cart">
                                        <ul>

                                            <li>
                                                <Link to="/checkout"><span>BUY</span></Link>
                                            </li>
                                            <li>
                                                <a href="#" data-bs-toggle="offcanvas"
                                                    data-bs-target="#offcanvasScrolling"
                                                    aria-controls="offcanvasScrolling">
                                                    <AiOutlineShopping /></a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <AiOutlineHeart /></a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="quick__view">
                                        <Link to="/singlepage">
                                        <h5>Quick View</h5>
                                        </Link>
                                    </div>
                                    <div className="product__content">
                                        <h5>Nancy Chair</h5>
                                        <p>BDT : 3000</p>
                                    </div>
                                </div>
                                <div className="product__item">
                                    <div className="producet__image">
                                        <img src={ chair } alt="" />
                                    </div>
                                    <div className="product__cart">
                                        <ul>

                                            <li>
                                                <Link to="/checkout"><span>BUY</span></Link>
                                            </li>
                                            <li>
                                                <a href="#" data-bs-toggle="offcanvas"
                                                    data-bs-target="#offcanvasScrolling"
                                                    aria-controls="offcanvasScrolling">
                                                    <AiOutlineShopping /></a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <AiOutlineHeart /></a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="quick__view">
                                        <Link to="/singlepage">
                                        <h5>Quick View</h5>
                                        </Link>
                                    </div>
                                    <div className="product__content">
                                        <h5>Nancy Chair</h5>
                                        <p>BDT : 3000</p>
                                    </div>
                                </div>
                                <div className="product__item">
                                    <div className="producet__image">
                                        <img src={ chair } alt="" />
                                    </div>
                                    <div className="product__cart">
                                        <ul>

                                            <li>
                                                <Link to="/checkout"><span>BUY</span></Link>
                                            </li>
                                            <li>
                                                <a href="#" data-bs-toggle="offcanvas"
                                                    data-bs-target="#offcanvasScrolling"
                                                    aria-controls="offcanvasScrolling">
                                                    <AiOutlineShopping /></a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <AiOutlineHeart /></a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="quick__view">
                                        <Link to="/singlepage">
                                        <h5>Quick View</h5>
                                        </Link>
                                    </div>
                                    <div className="product__content">
                                        <h5>Nancy Chair</h5>
                                        <p>BDT : 3000</p>
                                    </div>
                                </div>
                                <div className="product__item">
                                    <div className="producet__image">
                                        <img src={ chair } alt="" />
                                    </div>
                                    <div className="product__cart">
                                        <ul>

                                            <li>
                                                <Link to="/checkout"><span>BUY</span></Link>
                                            </li>
                                            <li>
                                                <a href="#" data-bs-toggle="offcanvas"
                                                    data-bs-target="#offcanvasScrolling"
                                                    aria-controls="offcanvasScrolling">
                                                    <AiOutlineShopping /></a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <AiOutlineHeart /></a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="quick__view">
                                        <Link to="/singlepage">
                                        <h5>Quick View</h5>
                                        </Link>
                                    </div>
                                    <div className="product__content">
                                        <h5>Nancy Chair</h5>
                                        <p>BDT : 3000</p>
                                    </div>
                                </div>
                                <div className="product__item">
                                    <div className="producet__image">
                                        <img src={ chair } alt="" />
                                    </div>
                                    <div className="product__cart">
                                        <ul>

                                            <li>
                                                <Link to="/checkout"><span>BUY</span></Link>
                                            </li>
                                            <li>
                                                <a href="#" data-bs-toggle="offcanvas"
                                                    data-bs-target="#offcanvasScrolling"
                                                    aria-controls="offcanvasScrolling">
                                                    <AiOutlineShopping /></a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <AiOutlineHeart /></a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="quick__view">
                                        <Link to="/singlepage">
                                        <h5>Quick View</h5>
                                        </Link>
                                    </div>
                                    <div className="product__content">
                                        <h5>Nancy Chair</h5>
                                        <p>BDT : 3000</p>
                                    </div>
                                </div>
                                <div className="product__item">
                                    <div className="producet__image">
                                        <img src={ chair } alt="" />
                                    </div>
                                    <div className="product__cart">
                                        <ul>

                                            <li>
                                                <Link to="/checkout"><span>BUY</span></Link>
                                            </li>
                                            <li>
                                                <a href="#" data-bs-toggle="offcanvas"
                                                    data-bs-target="#offcanvasScrolling"
                                                    aria-controls="offcanvasScrolling">
                                                    <AiOutlineShopping /></a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <AiOutlineHeart /></a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="quick__view">
                                        <Link to="/singlepage">
                                        <h5>Quick View</h5>
                                        </Link>
                                    </div>
                                    <div className="product__content">
                                        <h5>Nancy Chair</h5>
                                        <p>BDT : 3000</p>
                                    </div>
                                </div>
                                <div className="product__item">
                                    <div className="producet__image">
                                        <img src={ chair } alt="" />
                                    </div>
                                    <div className="product__cart">
                                        <ul>

                                            <li>
                                                <Link to="/checkout"><span>BUY</span></Link>
                                            </li>
                                            <li>
                                                <a href="#" data-bs-toggle="offcanvas"
                                                    data-bs-target="#offcanvasScrolling"
                                                    aria-controls="offcanvasScrolling">
                                                    <AiOutlineShopping /></a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <AiOutlineHeart /></a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="quick__view">
                                        <Link to="/singlepage">
                                        <h5>Quick View</h5>
                                        </Link>
                                    </div>
                                    <div className="product__content">
                                        <h5>Nancy Chair</h5>
                                        <p>BDT : 3000</p>
                                    </div>
                                </div>
                                <div className="product__item">
                                    <div className="producet__image">
                                        <img src={ chair } alt="" />
                                    </div>
                                    <div className="product__cart">
                                        <ul>

                                            <li>
                                                <Link to="/checkout"><span>BUY</span></Link>
                                            </li>
                                            <li>
                                                <a href="#" data-bs-toggle="offcanvas"
                                                    data-bs-target="#offcanvasScrolling"
                                                    aria-controls="offcanvasScrolling">
                                                    <AiOutlineShopping /></a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <AiOutlineHeart /></a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="quick__view">
                                        <Link to="/singlepage">
                                        <h5>Quick View</h5>
                                        </Link>
                                    </div>
                                    <div className="product__content">
                                        <h5>Nancy Chair</h5>
                                        <p>BDT : 3000</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
)
}

export default Shop;