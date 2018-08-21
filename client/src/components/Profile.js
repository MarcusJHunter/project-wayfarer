import React, {Component} from 'react';
import Users from '../models/UserModel';

class Profile extends Component {

<<<<<<< HEAD
    render(){

        let user = {};

        Users.getUser(email)
            .then(response => {
                if (response.data == "Succesful Call") {
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
=======
    
>>>>>>> upstream/master

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
