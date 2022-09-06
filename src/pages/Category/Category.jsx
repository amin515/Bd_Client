import React from 'react';
import './Category.scss';
import discover1 from '../../assets/Images/discover1.jpg';
import discover2 from '../../assets/Images/discover2.jpg';
import homeBanner from '../../assets/Images/devicehome.jpg';
import { BsSmartwatch } from "react-icons/bs";
import { Link } from 'react-router-dom';
const Category = () => {
return (
<div>
    <div className="category__sec">
        <div className="cetegory__wrapper">
            <div className="container">
                <div className="all__category">
                <h2>All Category</h2>
                <div className="category">
                  
                   
                   <div className="banner">
                        <a href="#"><img src={ discover1 } alt="" /></a>
                    </div>
                      
                    <div className="content">
                        <div className="category__item">
                            <div className="category__box">
                                <div className="category__content">
                                    <a href="#"><BsSmartwatch/></a>
                                </div>
                                <div className="category__text">
                                    <h3>Smart Phone</h3>
                                </div>
                                <div className="view__more">
                                   <p><Link to="/shop">view more</Link></p> 
                                </div>
                            </div>
                            <div className="category__box">
                                <div className="category__content">
                                    <a href="#"><BsSmartwatch/></a>
                                </div>
                                <div className="category__text">
                                    <h3>Smart Phone</h3>
                                </div>
                                <div className="view__more">
                                <p><Link to="/shop">view more</Link></p> 
                                </div>
                            </div>
                            <div className="category__box">
                                <div className="category__content">
                                    <a href="#"><BsSmartwatch/></a>
                                </div>
                                <div className="category__text">
                                    <h3>Smart Phone</h3>
                                </div>
                                <div className="view__more">
                                <p><Link to="/shop">view more</Link></p> 
                                </div>
                            </div>
                            <div className="category__box">
                                <div className="category__content">
                                    <a href="#"><BsSmartwatch/></a>
                                </div>
                                <div className="category__text">
                                    <h3>Smart Phone</h3>
                                </div>
                                <div className="view__more">
                                <p><Link to="/shop">view more</Link></p> 
                                </div>
                            </div>
                            <div className="category__box">
                                <div className="category__content">
                                    <a href="#"><BsSmartwatch/></a>
                                </div>
                                <div className="category__text">
                                    <h3>Smart Phone</h3>
                                </div>
                                <div className="view__more">
                                <p><Link to="/shop">view more</Link></p> 
                                </div>
                            </div>
                            <div className="category__box">
                                <div className="category__content">
                                    <a href="#"><BsSmartwatch/></a>
                                </div>
                                <div className="category__text">
                                    <h3>Smart Phone</h3>
                                </div>
                                <div className="view__more">
                                <p><Link to="/shop">view more</Link></p> 
                                </div>
                            </div>
                        </div>             
                    </div>
                </div>
                <div className="home__diveder">
                        <div className="content">
                            <div className="divider__banner">
                                <img src={ homeBanner } alt="" />
                            </div>
                            <div className="divider__content">

                            </div>
                        </div>
                    </div>
                    <div className="category">
                  

                  <div className="banner">
                     <a href="#"><img src={ discover2 } alt="" /></a> 
                  </div>

                  <div className="content">
                      <div className="category__item">
                          <div className="category__box">
                              <div className="category__content">
                                  <a href="#"><BsSmartwatch/></a>
                              </div>
                              <div className="category__text">
                                  <h3>Smart Phone</h3>
                              </div>
                              <div className="view__more">
                              <p><Link to="/shop">view more</Link></p> 
                              </div>
                          </div>
                          <div className="category__box">
                              <div className="category__content">
                                  <a href="#"><BsSmartwatch/></a>
                              </div>
                              <div className="category__text">
                                  <h3>Smart Phone</h3>
                              </div>
                              <div className="view__more">
                              <p><Link to="/shop">view more</Link></p> 
                              </div>
                          </div>
                          <div className="category__box">
                              <div className="category__content">
                                  <a href="#"><BsSmartwatch/></a>
                              </div>
                              <div className="category__text">
                                  <h3>Smart Phone</h3>
                              </div>
                              <div className="view__more">
                              <p><Link to="/shop">view more</Link></p> 
                              </div>
                          </div>
                          <div className="category__box">
                              <div className="category__content">
                                  <a href="#"><BsSmartwatch/></a>
                              </div>
                              <div className="category__text">
                                  <h3>Smart Phone</h3>
                              </div>
                              <div className="view__more">
                              <p><Link to="/shop">view more</Link></p> 
                              </div>
                          </div>
                          <div className="category__box">
                              <div className="category__content">
                                  <a href="#"><BsSmartwatch/></a>
                              </div>
                              <div className="category__text">
                                  <h3>Smart Phone</h3>
                              </div>
                              <div className="view__more">
                              <p><Link to="/shop">view more</Link></p> 
                              </div>
                          </div>
                          <div className="category__box">
                              <div className="category__content">
                                  <a href="#"><BsSmartwatch/></a>
                              </div>
                              <div className="category__text">
                                  <h3>Smart Phone</h3>
                              </div>
                              <div className="view__more">
                              <p><Link to="/shop">view more</Link></p> 
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

export default Category;