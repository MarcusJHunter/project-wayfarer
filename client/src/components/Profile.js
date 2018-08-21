import React, {Component} from 'react';


class Profile extends Component {
    render(){
        console.log(this.props.loggedIn);
        return(
            <div className='profile'>
                <h3 className='profileName'>Name: </h3>
                <h4 className='profileCity'>City:</h4>
                <h4 className='profileSignUpDate'>SUD:</h4>
            </div>
        )
    }
}

export default Profile;
