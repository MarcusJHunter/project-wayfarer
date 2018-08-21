import React, {Component} from 'react';
import Users from '../models/UserModel';

class Profile extends Component {


    render(){

        let user = {};
        let email = window.localStorage.getItem('user')


        // Users.getProfile(email)
        //     .then(response => {
        //         if (response.data === "Good Call") {
        //             user = response
        //             console.log(user)
        //         } else {
        //             console.log("user not found")
        //         }
        //     })
        //     .catch(err => {
        //         console.log(err);
        //         console.log("In catch");
        //     });

        console.log(this.props.user);
        return(
            <div className='profile'>
                <h3 className='profileName'>Email: {this.props.user} </h3>
                <h4 className='profileCity'>City:{user.location}</h4>
            </div>
        )
    }
}

export default Profile;
