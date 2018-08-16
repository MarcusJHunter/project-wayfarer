import React, {Component} from 'react';
import {Link} from 'react-router-dom';

const navbar = (props) => {

    if(props.loggedIn === false) {
            return(
                <header className="headRight">
                    <Link to='/signin'>Sign in</Link>
                    <Link to='/signup'>Sign up</Link>
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