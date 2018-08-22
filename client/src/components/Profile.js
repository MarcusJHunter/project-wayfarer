import React, {Component} from 'react';
import SignUpForm from './SignUpForm.js';
import Popup from "reactjs-popup";
import EditProfile from './EditProfile'

class Profile extends Component {

    render(){



        console.log(this.props)
        console.log(this.props.user);
        return(
            <div className='profile'>
                <h2 className='profileName'> Name: {this.props.user.name}</h2>
                <h3 className='profileEmail'>Email: {this.props.user.email} </h3>
                <h4 className='profileCity'>City: {this.props.user.location} </h4>
                <h5 className='profileJd'>Join Date:{this.props.user.joinDate}</h5>
               <Popup trigger={<a className="button"> Edit Profile </a>} modal>
                            {close => (
                            <div className="modal">
                                <a className="close" onClick={close}>
                                &times;
                                </a>
                                <EditProfile user={this.props.user} login={this.props.login} />
                            </div>)}
                        </Popup>

            </div>

        )
    }
}

export default Profile;
