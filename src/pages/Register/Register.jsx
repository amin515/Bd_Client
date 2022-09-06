
import React from 'react';
import './Register.scss';
import { Link } from 'react-router-dom';
const Register = () => {
  return (
    <div>
        <div className="login__sec">
        <div className="login__wrapper">
            <div className="container">
                <div className="sign__in">
                <div className="card shadow-sm">
                    <div className="card-body">
                        <div className="title">
                            <h4>New Member?</h4>
                            <h5>Just Sign Up</h5>
                        </div>
                        <form action="#">
                            <div className="my-3">
                                <label htmlFor="Name">Name</label>
                                <input type="text"/>
                            </div>
                            <div className="my-3">
                                <label htmlFor="Email">Email</label>
                                <input type="text"/>
                            </div>
                            <div className="my-3">
                                <label htmlFor="Email">Email</label>
                                <input type="text"/>
                            </div>
                            <div className="my-3">
                                <label htmlFor="NPassword">New Password</label>
                                <input type="password" />
                            </div>
                            <div className="my-3">
                                <label htmlFor="CPassword">Confirm Password</label>
                                <input type="password" />
                            </div>
                            {/* <div className="my-3">
                                <a href="#" className='fgot__pass'>forgot password?</a>
                            </div> */}

                            <button type='submit'>Sign Up</button>
                        </form>
                        <div className="sign__up__call">
                            <p>All ready have an account <span><Link to="/login">Sign in?</Link></span></p>
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

export default Register;
