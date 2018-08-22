import React, {Component} from 'react';
import SignUpForm from './SignUpForm.js';
import Popup from "reactjs-popup";
import EditProfile from './EditProfile';
import axios from 'axios';

class Profile extends Component {
    state = {
        user: {}
    }

    componentDidMount = () => {
        console.log('in didMount',localStorage.getItem('loggedIn'))
            let userEmail = localStorage.getItem('user');
            axios.get(`http://localhost:4000/api/user/profile/${userEmail}`)
                .then(res => this.setState({ user: res.data }))
    }

    updateUser = (user) => {
        this.setState({ user: user })
    }

    render(){

        if(localStorage.getItem('loggedIn')){
            return(
                <div className='profile'>
                    <h2 className='profileName'> Name: {this.state.user.name}</h2>
                    <h3 className='profileEmail'>Email: {this.state.user.email} </h3>
                    <h4 className='profileCity'>City: {this.state.user.location} </h4>
                    <h5 className='profileJd'>Join Date:{this.state.user.joinDate}</h5>
                <Popup trigger={<a className="button"> Edit Profile </a>} modal>
                                {close => (
                                <div className="modal">
                                    <a className="close" onClick={close}>
                                    &times;
                                    </a>
                                    <EditProfile user={this.props.user} login={this.props.login} updateUser={this.updateUser} />
                                </div>)}
                            </Popup>

                </div>
            )
        } else {
            console.log(localStorage.getItem('loggedIn',))
            return(
                <div>
                    <p>User not authorized</p>
                </div>
            )
        }

    }
}

export default Profile;
