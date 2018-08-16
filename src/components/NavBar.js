import React, {Component} from 'react';
import {Link} from 'react-router-dom';

const navbar = (props) => {

    if(props.loggedIn === false) {
            return(
                <div className="header">
                    <h2>Wayfarer</h2>
                    <header className="headRight">
                        <Link to='/signin' className="signIn-Up">Sign in</Link>
                        <Link to='/signup' className="signIn-Up">Sign up</Link>
                    </header>
                </div>
            )
    }
    else {
        return(
            <div className="header">
                <h2>Wayfarer</h2>
                <header className="headRight">
                    <Link to='/profile'>UserName</Link>
                    <p>Sign out</p>
                </header>
            </div>
        )
    }
}

export default navbar;