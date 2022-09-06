import React from 'react';
import './ThankYou.scss';
import product__img from '../../assets/Images/single_product.jpg';
import { Link } from 'react-router-dom';
const ThankYou = () => {
return (
<div>
    <div className="thankyou__sec">
        <div className="thank__wrapper">
            <div className="container">
                <div className="thankyou__content">
                    <div className="title__content">
                        <a href="#">☺</a>
                        <h2>Thanks for Order</h2>
                    </div>
                    <div className="thank__table">
                        <div className="card shadow-sm">
                            <div className="card-body">
                                <table className='table striped'>
                                    <tr>
                                        <th>Product Image</th>
                                        <th>Product name</th>
                                        <th>Price</th>
                                        <th>Qty</th>
                                    </tr>
                                    <tr>
                                        <td><img src={ product__img } alt="" style={{width : '150px'}} /></td>
                                        <td>Smart Phone</td>
                                        <td>BDT 2500</td>
                                        <td>1</td>

                                    </tr>
                                </table>
                            </div>

                        </div>

                    </div>
                    <div className="address__sec">
                        <div className="content">
                            <div className="customer__address">
                                <h3>Customer Details</h3>
                            </div>
                            <div className="content__list">
                                <ul>
                                    <li>Name : </li>
                                    <li>Email : </li>
                                    <li>Phone : </li>
                                    <li>Address : </li>
                                </ul>
                                <ul>
                                    <li>Mohammad Nur Amin </li>
                                    <li>stack.developer51@gmail.com </li>
                                    <li>01303292586 </li>
                                    <li>Dakur Chak, Bogura sadar Bogura</li>
                                </ul>

                            </div>
                            <div className="backTo__shop">
                                <Link to="/shop" className='go_to_shop'>Go to Shopping</Link>
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

export default ThankYou;