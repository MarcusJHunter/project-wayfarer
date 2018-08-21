import React, {Component} from 'react';

<<<<<<< HEAD
import Users from '../models/UserModel';

class Profile extends Component {
    state = {

    };

    let email = this.refs.email.value;
    let location = this.refs.email.value;
=======

class Profile extends Component {




>>>>>>> upstream/master



    render(){
        return(
            <div className='profile'>
                <h3 clsssName='profileName'>Email: </h3>
                <h4 className='profileCity'>City:</h4>
                <h4 className='profileSignUpDate'>SUD:</h4>
            </div>
        )
    }
}

export default Profile;
