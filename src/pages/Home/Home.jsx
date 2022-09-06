import React from 'react';
import './Home.scss';
import '../../assets/Style/index.scss';
import { AiOutlineShopping, AiOutlineHeart } from "react-icons/ai";
import shop1 from '../../assets/Images/banner2-h4.jpg';
import shop2 from '../../assets/Images/banner3-h4.jpg';
import chair from '../../assets/Images/chair.jpg';
import { Link } from 'react-router-dom';
import SiteCanvas from '../../Components/SiteCanvas/SiteCanvas';

const Home = () => {
return (
<div>

    <div className="slider__sec">
        <div className="slider__wrapper">
            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"
                        aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                        aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                        aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3"
                        aria-label="Slide 4"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="https://149352359.v2.pressablecdn.com/wp-content/uploads/2012/07/slide1-1120x356.jpg"
                            class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="https://149352359.v2.pressablecdn.com/wp-content/uploads/2012/07/slide2-1120x356.jpg"
                            class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="https://149352359.v2.pressablecdn.com/wp-content/uploads/2012/07/slide3-1120x356.jpg"
                            class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src="https://149352359.v2.pressablecdn.com/wp-content/uploads/2012/07/slide4-1120x356.jpg"
                            class="d-block w-100" alt="..." />
                        <div class="carousel-caption d-none d-md-block">
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    </div>
    {/* slider section end */}
    <SiteCanvas/>
    <div className="product__section">
        <div className="product__wrapper">
            <h2>Our Product</h2>
            <div className="container">

                <div className="product__item">
                    <div className="producet__image">
                        <img src={ chair }
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
                        <img src={ chair }
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
                        <img src={ chair }
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
                        <img src={ chair }
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
                        <img src={ chair }
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
                        <img src={ chair }
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
                        <img src={ chair }
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
                        <img src={ chair }
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
                        <img src={ chair }
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
                        <img src={ chair }
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
                        <img src={ chair }
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
                        <img src={ chair }
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
    <div className="shop__secc">
        <div className="shop__wrapper">
            <div className="container">
                <div className="shop__image__left">
                    <div className="content">
                        <a href="#"><img src={ shop1 } alt="" /></a>
                        <div className="shop__content">
                            <h4>GOOGLE HOME WOODEN SPEAKER</h4>
                            <p> Just only BDT 2000</p>
                            <Link to='/shop'>Shop Now</Link>
                        </div>
                    </div>
                </div>
                <div className="shop__image__right">
                    <div className="content">
                        <a href="#"><img src={ shop2 } alt="" /></a>
                        <div className="shop__content">
                            <h4>GOOGLE ACCESORIES ELECTRONICS</h4>
                            <p> Just only BDT 3500</p>
                            <Link to='/shop'>Shop Now</Link>
                        </div>
                    </div>
                </div>                             
            </div>
        </div>
    </div>
    {/* product section end */}
    <div className="newsLetter__sec">
        <div className="news__wrapper">
            <div className="container">
                <div className="news__box">
                    <div className="news__item__left">
                        <div className="news__content">
                            <h2>Want product news and upadets?</h2>
                            <p>Signup for our newsletter and stay update.</p>
                        </div>
                    </div>
                    <div className="news__item__right">
                        <div className="input__item">
                            <form action="#">
                                <input type="text" placeholder='Enter your email' />
                                <button type='submit'>Notify me</button>
                            </form>
                            <p>we care about protection our data Read our <span><a href="#">Privacy </a>and
                                    <a href="#">Policy </a></span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
)
}

export default Home;