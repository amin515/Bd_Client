import React from 'react';
import './SinglePage.scss';
import singleProduct from '../../assets/Images/single_product.jpg';
import related1 from '../../assets/Images/related1.jpg';
import related2 from '../../assets/Images/related2.jpg';
import related3 from '../../assets/Images/related3.jpg';
import related4 from '../../assets/Images/related4.jpg';
import { AiOutlineHeart, AiOutlineShopping } from "react-icons/ai";
import { MdOutlineCompareArrows } from "react-icons/md";
import { BsStarFill , BsStarHalf } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import Accordion from '../../Components/Accordion/Accordion';
import SiteModal from '../../Components/SiteModal/SiteModal';
import { Link } from 'react-router-dom';
import SiteCanvas from '../../Components/SiteCanvas/SiteCanvas';


const SinglePage = () => {
return (
<div>
    <SiteCanvas/>
    <div className="single__product">
        <div className="product__wrapper">
            <div className="container">
                <div className="product__left">
                    <div className="product__image">
                        <img src={ singleProduct } alt="" />
                    </div>
                    <div className="related__image">
                        <div className="image__item">
                            <a href="#"><img src={ related1 } alt="" /></a>
                            <a href="#"><img src={ related2 } alt="" /></a>
                            <a href="#"><img src={ related3 } alt="" /></a>
                            <a href="#"><img src={ related4 } alt="" /></a>
                        </div>
                    </div>
                </div>
                <div className="product__right">
                    <div className="product__content">
                        <div className="product__name">
                            <h2> Nikon D300</h2>
                        </div>
                        <div className="product__ability">
                            <ul>
                                <li><span className="decor">Product Code:</span>Product 4</li>
                                <li><span className="decor">Availability:</span>In Stock</li>
                            </ul>
                        </div>
                        <div className="price">
                            <h2>BDT 1500</h2>
                        </div>
                        <div className="qty">
                            <p>Qty</p>
                            <div className="qty__incress">
                                <button>-</button>
                                <span>1</span>
                                <button>+</button>
                            </div>
                        </div>
                        <div className="add__to__cart">
                            <div className="cart__btn">
                            <a href="#" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling"><AiOutlineShopping/>Add to cart</a>
                                
                            </div>
                            <a className='heart' href='#'>
                                <AiOutlineHeart /></a>
                            <a className='heart' href='#'>
                                <MdOutlineCompareArrows /></a>
                        </div>
                        <div className="review">
                            <div className="review__fivestar">
                                <ul>
                                    <li><a href="#">
                                            <BsStarFill /></a></li>
                                    <li><a href="#">
                                            <BsStarFill /></a></li>
                                    <li><a href="#">
                                            <BsStarFill /></a></li>
                                    <li><a href="#">
                                            <BsStarFill /></a></li>
                                    <li><a href="#">
                                            <BsStarHalf /></a></li>
                                </ul>
                            </div>
                            <div className="one__review">
                                <a href='#'>1 Review</a>
                            </div>
                            <div className="write__review">
                                <a href='#'><SiteModal/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="description">
                <div className="des__wrapper">
                    <div className="container">
                          <Accordion/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="product__section">
        <div className="product__wrapper">
            <h2>Related Product</h2>
            <div className="container">
                <div className="product__item">
                    <div className="producet__image">
                        <img src="https://helendo.jamstacktemplates.dev/images/products/nancy-chair/300x300.jpg"
                            alt="" />
                    </div>
                    <div className="product__cart">
                        <ul>
                            <li>
                            <Link to="/checkout"><span>BUY</span></Link>
                            </li>
                            <li>
                            <a href="#" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling"><AiOutlineShopping/></a>
                            </li>
                            <li>
                                <a href="#">
                                    <AiOutlineHeart /></a>
                            </li>
                        </ul>
                    </div>
                    <div className="quick__view">
                      
                      <Link to="/singlepage"><h5>Quick View</h5></Link>
                    </div>
                    <div className="product__content">
                        <h5>Nancy Chair</h5>
                        <p>BDT : 3000</p>
                    </div>
                </div>
                <div className="product__item">
                    <div className="producet__image">
                        <img src="https://helendo.jamstacktemplates.dev/images/products/nancy-chair/300x300.jpg"
                            alt="" />
                    </div>
                    <div className="product__cart">
                        <ul>
                            <li>
                            <Link to="/checkout"><span>BUY</span></Link>
                            </li>
                            <li>
                            <a href="#" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling"><AiOutlineShopping/></a>
                            </li>
                            <li>
                                <a href="#">
                                    <AiOutlineHeart /></a>
                            </li>
                        </ul>
                    </div>
                    <div className="quick__view">
                      
                      <Link to="/singlepage"><h5>Quick View</h5></Link>
                    </div>
                    <div className="product__content">
                        <h5>Nancy Chair</h5>
                        <p>BDT : 3000</p>
                    </div>
                </div>
                <div className="product__item">
                    <div className="producet__image">
                        <img src="https://helendo.jamstacktemplates.dev/images/products/nancy-chair/300x300.jpg"
                            alt="" />
                    </div>
                    <div className="product__cart">
                        <ul>
                            <li>
                            <Link to="/checkout"><span>BUY</span></Link>
                            </li>
                            <li>
                            <a href="#" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling"><AiOutlineShopping/></a>
                            </li>
                            <li>
                                <a href="#">
                                    <AiOutlineHeart /></a>
                            </li>
                        </ul>
                    </div>
                    <div className="quick__view">
                      
                      <Link to="/singlepage"><h5>Quick View</h5></Link>
                    </div>
                    <div className="product__content">
                        <h5>Nancy Chair</h5>
                        <p>BDT : 3000</p>
                    </div>
                </div>
                <div className="product__item">
                    <div className="producet__image">
                        <img src="https://helendo.jamstacktemplates.dev/images/products/nancy-chair/300x300.jpg"
                            alt="" />
                    </div>
                    <div className="product__cart">
                        <ul>
                            <li>
                            <Link to="/checkout"><span>BUY</span></Link>
                            </li>
                            <li>
                            <a href="#" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling"><AiOutlineShopping/></a>
                            </li>
                            <li>
                                <a href="#">
                                    <AiOutlineHeart /></a>
                            </li>
                        </ul>
                    </div>
                    <div className="quick__view">
                      
                      <Link to="/singlepage"><h5>Quick View</h5></Link>
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
)
}

export default SinglePage;

