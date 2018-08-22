import React, {Component} from 'react';
import Users from '../models/UserModel';

class Profile extends Component {

    render(){

        let user = this.props.users;
        let email = window.localStorage.getItem('user')


        console.log(this.props.user);
        return(
            <div className='profile'>
                <h3 className='profileName'>Email: {this.props.user.email} </h3>
                <h4 className='profileCity'>City:{this.props.user.location}</h4>

            </div>
        )
    }
}

export default Profile;
