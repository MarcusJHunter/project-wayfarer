import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Popup from "reactjs-popup";
import LoginForm from './LoginForm.js'
import SignUpForm from './SignUpForm.js';
import Profile from './Profile'

const navbar = (props) => {


    console.log(props.user);


    <Link exact to='/'></Link>
    if(props.loggedIn === false) {
            return(
                <div className="header">
                    <Link to='/homepage' className="title">Wayfarer</Link>
                    <header className="headRight">
                            <Popup trigger={<a className="button"> Login </a>} modal>
                                {close => (
                                <div className="modal">
                                    <a className="close" onClick={close}>
                                    &times;
                                    </a>
                                    <LoginForm login={props.login} />
                                </div>)}
                            </Popup>
                            <Popup trigger={<a className="button"> Sign Up! </a>} modal>
                                {close => (
                                <div className="modal">
                                    <a className="close" onClick={close}>
                                    &times;
                                    </a>
                                    <SignUpForm login={props.login} />
                                </div>)}
                            </Popup>
                            <div>
                            <Link to='/profile'>{props.user}</Link>


                            </div>
                    </header>
                </div>

            )
    }
    else {
        return(
            <div className="header">
                <Link to='/homepage' className="title">Wayfarer</Link>
                <header className="headRight">
                    <Link to='/profile'>boop{props.user}</Link>
                    <p>Sign out</p>
                </header>
            </div>
        )
    }
}

export default navbar;
