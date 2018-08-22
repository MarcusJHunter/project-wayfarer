import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Popup from "reactjs-popup";
import LoginForm from './LoginForm.js'
import SignUpForm from './SignUpForm.js';


class Navbar extends Component {
    // state = {
    //     user: null,
    // }
    // componentDidUpdate = (prevProps, prevState) => {
    //     if(this.props.user !== prevProps.user) {
    //         this.setState({user: this.props.user})
    //     }
    // }
    render(){
        <Link exact to='/'></Link>
        if (this.props.loggedIn === false) {
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
                                <LoginForm login={this.props.login} loggedIn={this.props.loggedIn} />
                            </div>)}
                        </Popup>
                        <Popup trigger={<a className="button"> Sign Up! </a>} modal>
                            {close => (
                            <div className="modal">
                                <a className="close" onClick={close}>
                                &times;
                                </a>
                                <SignUpForm login={this.props.login}  loggedIn={this.props.loggedIn}/>
                            </div>)}
                        </Popup>
                        <div>
                        <Link to='/profile' user={this.props.user} >{this.props.user.email}</Link>
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
                        <Link className="username" to='/profile' user={this.props.user} >{this.props.user.email}'s Profile</Link>
                        <span onClick={this.props.logout}>Sign out</span>
                    </header>
                </div>
            )
        }
    }
}

export default Navbar;
