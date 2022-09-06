import React from 'react';
import './MyAccount.scss';
import nuramin from '../../assets/Images/nuramin.jpg';
const MyAccount = () => {
  return (
    <div>
      <div className="my__acount">
        <div className="my__acc__wrapper">
            <div className="container">
                <div className="acc__box">
                    <div className="profile__image">
                        <img src={ nuramin } alt="" />
                    </div>
                    <div className="profile__content">
                    <ul>
                        <li><strong>Name : </strong></li>
                        <li><strong>Email : </strong></li>
                        <li><strong>Phone : </strong></li>
                    </ul>
                    <ul>
                        <li className='border__radius'>Nur AMin</li>
                        <li className='border__radius'>stack.developer51@gmail.com</li>
                        <li className='border__radius'>01303292586</li>
                    </ul>
                    </div>
                    <div className="logout__btn">
                        <a href="#">Sign Out</a>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default MyAccount;

