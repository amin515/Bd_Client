import React from 'react';
import './Login.scss';
import { Link } from 'react-router-dom';
const Login = () => {
return (
<div>
    <div className="login__sec">
        <div className="login__wrapper">
            <div className="container">
                <div className="sign__in">
                <div className="card shadow-sm">
                    <div className="card-body">
                        <div className="title">
                            <h4>All Ready Member!</h4>
                            <h5>Just Sign In</h5>
                        </div>
                        <form action="#">
                            <div className="my-3">
                                <label htmlFor="Email">Email</label>
                                <input type="text"/>
                            </div>
                            <div className="my-3">
                                <label htmlFor="Password">Password</label>
                                <input type="text" />
                            </div>
                            <div className="my-3">
                                <a href="#" className='fgot__pass'>forgot password?</a>
                            </div>

                            <button type='submit'>Sign In</button>
                        </form>
                        <div className="sign__up__call">
                            <p>Don't have an account <span><Link to="/register">Sign Up?</Link></span></p>
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

export default Login;