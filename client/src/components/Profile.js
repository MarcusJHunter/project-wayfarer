import React, {Component} from 'react';
import Users from '../models/UserModel';

class Profile extends Component {


    render(){

        let user = {};
        let email = window.localStorage.getItem('user')


        Users.getProfile(email)
            .then(response => {
                if (response.data == "Good Call") {
                    user = response
                    console.log(user)
                } else {
                    console.log("user not found")
                }
            })
            .catch(err => {
                console.log(err);
                console.log("In catch");
            });


        return(
            <div className='profile'>
                <h3 clsssName='profileName'>Email: {user.email} </h3>
                <h4 className='profileCity'>City:{user.location}</h4>
                <h4 className='profileSignUpDate'>SUD:</h4>
            </div>
        )
    }
}

export default Profile;
