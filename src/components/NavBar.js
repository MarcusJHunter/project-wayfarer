import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Popup from "reactjs-popup";
import LoginForm from './LoginForm.js'
import SignUpForm from './SignUpForm.js';

const navbar = (props) => {

    if(props.loggedIn === false) {
            return(
                <header className="headRight">
                    <Link to='/signin'>Sign in</Link>
                    <Link to='/signup'>Sign up</Link>
                        <Popup trigger={<a className="button"> Login </a>} modal>
                            {close => (
                            <div className="modal">
                                <a className="close" onClick={close}>
                                &times;
                                 </a>
                                <LoginForm />
                            </div>)}
                        </Popup>
                        <Popup trigger={<a className="button"> Sign Up! </a>} modal>
                            {close => (
                            <div className="modal">
                                <a className="close" onClick={close}>
                                &times;
                                 </a>
                                <SignUpForm />
                            </div>)}
                        </Popup>
                </header>
            )
    }
    else {
        return(
            <header className="headRight">
                <Link to='/profile'>UserName</Link>
                <p>Sign out</p>
            </header>
        )
    }
}

export default navbar;
