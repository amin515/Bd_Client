import React from 'react';
import './CheckOut.scss';
import single1 from '../../assets/Images/product.png';
import chair from '../../assets/Images/chair.jpg';
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { AiOutlineTwitter, AiOutlineYoutube } from "react-icons/ai";
import { BiLeftArrow } from "react-icons/bi";
import { GrLinkedinOption } from "react-icons/gr";
import { BsStarFill , BsStarHalf } from "react-icons/bs";
import { Link } from 'react-router-dom';

const CheckOut = () => {
return (
<div>
    <div className="checkout__sec">
        <div className="check__wrapper">
            <div className="container">
                <h2>Please fill the forms and grab your product now</h2>
                <div className="check__content">

                    <div className="check__left">
                        <form action="#">
                            <div className="my-3">
                                <label htmlFor="Name">Name</label>
                                <input type="text" />
                            </div>
                            <div className="my-3">
                                <label htmlFor="Email">Email</label>
                                <input type="text" />
                            </div>
                            <div className="my-3">
                                <label htmlFor="Phone">Phone</label>
                                <input type="text" />
                            </div>
                            <div className="my-3">
                                <label htmlFor="Address 1">Address 1</label>
                                <input type="text" />
                            </div>
                            <div className="my-3">
                                <label htmlFor="Address 2">Address 2</label>
                                <input type="text" />
                            </div>
                            <div className="my-3">
                                <label htmlFor="Address 3">Address 2</label>
                                <input type="text" />
                            </div>
                            <div className="my-3">
                                <label htmlFor="Deatails">Deatails</label>
                                <textarea name="" id="" cols="30" rows="10"></textarea>
                            </div>
                        </form>
                    </div>
                    <div className="check__right">
                        <div className="content">
                            <div className="check__content__right">
                                {/* <div className="product__name">
                                    <h4><strong>Product name :</strong> Namcy Chair</h4>
                                </div>
                                <div className="product__detailes">
                                    <ul>
                                        <li><strong>Price :</strong></li>
                                        <li><strong>Size :</strong></li>
                                        <li><strong>Color :</strong></li>
                                        <li><strong>Qty :</strong></li>
                                        <li><strong>Description :</strong></li>
                                    </ul>
                                    <ul>
                                        <li>BDT 4500</li>
                                        <li>M</li>
                                        <li>Gray</li>
                                        <li>1</li>
                                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, tempora
                                            incidunt harum veniam optio maxime magni perferendis nihil! Cum alias
                                            blanditiis aliquam ullam quos eum molestiae vitae, cupiditate vero! Soluta?
                                        </li>
                                    </ul>
                                </div> */}
                                <div className="accordion__list">
                                    <table className='table table-striped'>
                                        <thead>
                                            <tr>
                                                <th>Photo</th>
                                                <th>Name</th>
                                                <th>Price</th>
                                                <th>Size</th>
                                                <th>Qty</th>
                                                <th>Short Des</th>
                                                <th>Review</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td><img style={{width : '100px', objectFit : 'cover'}} src={ chair }
                                                        alt="" /></td>
                                                <td>Chair</td>
                                                <td><strong>BDT </strong> 2500</td>
                                                <td><strong>M</strong></td>
                                                <td><strong>1</strong></td>
                                                <td className='comment__tab'>Lorem, ipsum dolor sit amet consectetur
                                                    adipisicing elit. Ipsa exercitationem</td>
                                                <td>
                                                    <div className="revirw__star">
                                                        <ul>
                                                            <li>
                                                                <BsStarFill />
                                                            </li>
                                                            <li>
                                                                <BsStarFill />
                                                            </li>
                                                            <li>
                                                                <BsStarFill />
                                                            </li>
                                                            <li>
                                                                <BsStarFill />
                                                            </li>
                                                            <li>
                                                                <BsStarHalf />
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                        <tbody>
                                            <tr>
                                                <td><img style={{width : '100px', objectFit : 'cover'}} src={ chair }
                                                        alt="" /></td>
                                                <td>Chair</td>
                                                <td><strong>BDT </strong> 2500</td>
                                                <td><strong>M</strong></td>
                                                <td><strong>1</strong></td>
                                                <td className='comment__tab'>Lorem, ipsum dolor sit amet consectetur
                                                    adipisicing elit. Ipsa exercitationem</td>
                                                <td>
                                                    <div className="revirw__star">
                                                        <ul>
                                                            <li>
                                                                <BsStarFill />
                                                            </li>
                                                            <li>
                                                                <BsStarFill />
                                                            </li>
                                                            <li>
                                                                <BsStarFill />
                                                            </li>
                                                            <li>
                                                                <BsStarFill />
                                                            </li>
                                                            <li>
                                                                <BsStarHalf />
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                        <tbody>
                                            <tr>
                                                <td><img style={{width : '100px', objectFit : 'cover'}} src={ chair }
                                                        alt="" /></td>
                                                <td>Chair</td>
                                                <td><strong>BDT </strong> 2500</td>
                                                <td><strong>M</strong></td>
                                                <td><strong>1</strong></td>
                                                <td className='comment__tab'>Lorem, ipsum dolor sit amet consectetur
                                                    adipisicing elit. Ipsa exercitationem</td>
                                                <td>
                                                    <div className="revirw__star">
                                                        <ul>
                                                            <li>
                                                                <BsStarFill />
                                                            </li>
                                                            <li>
                                                                <BsStarFill />
                                                            </li>
                                                            <li>
                                                                <BsStarFill />
                                                            </li>
                                                            <li>
                                                                <BsStarFill />
                                                            </li>
                                                            <li>
                                                                <BsStarHalf />
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                        <tbody>
                                            <tr>
                                                <td><img style={{width : '100px', objectFit : 'cover'}} src={ chair }
                                                        alt="" /></td>
                                                <td>Chair</td>
                                                <td><strong>BDT </strong> 2500</td>
                                                <td><strong>M</strong></td>
                                                <td><strong>1</strong></td>
                                                <td className='comment__tab'>Lorem, ipsum dolor sit amet consectetur
                                                    adipisicing elit. Ipsa exercitationem</td>
                                                <td>
                                                    <div className="revirw__star">
                                                        <ul>
                                                            <li>
                                                                <BsStarFill />
                                                            </li>
                                                            <li>
                                                                <BsStarFill />
                                                            </li>
                                                            <li>
                                                                <BsStarFill />
                                                            </li>
                                                            <li>
                                                                <BsStarFill />
                                                            </li>
                                                            <li>
                                                                <BsStarHalf />
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                        <tbody>
                                            <tr>
                                                <td><img style={{width : '100px', objectFit : 'cover'}} src={ chair }
                                                        alt="" /></td>
                                                <td>Chair</td>
                                                <td><strong>BDT </strong> 2500</td>
                                                <td><strong>M</strong></td>
                                                <td><strong>1</strong></td>
                                                <td className='comment__tab'>Lorem, ipsum dolor sit amet consectetur
                                                    adipisicing elit. Ipsa exercitationem</td>
                                                <td>
                                                    <div className="revirw__star">
                                                        <ul>
                                                            <li>
                                                                <BsStarFill />
                                                            </li>
                                                            <li>
                                                                <BsStarFill />
                                                            </li>
                                                            <li>
                                                                <BsStarFill />
                                                            </li>
                                                            <li>
                                                                <BsStarFill />
                                                            </li>
                                                            <li>
                                                                <BsStarHalf />
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                
                                <div className="confirmation">
                                    <Link to="/thankyou" className='confirm'>Confirm Order</Link>
                                    <Link to="/shop" className='shopp__btn'>
                                    <BiLeftArrow />Shop page</Link>
                                </div>
                                <div className="follow__us">
                                    <h4>Follow Us</h4>
                                    <ul>
                                        <li><a href="#">
                                                <FaFacebookF /></a></li>
                                        <li><a href="#">
                                                <FaInstagram /></a></li>
                                        <li><a href="#">
                                                <AiOutlineTwitter /></a></li>
                                        <li><a href="#">
                                                <GrLinkedinOption /></a></li>
                                        <li><a href="#">
                                                <AiOutlineYoutube /></a></li>
                                    </ul>
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

export default CheckOut;