import React, {Component} from 'react';
import Users from '../models/UserModel';


class EditProfile extends Component{

  handleSubmit = event => {
      event.preventDefault();

      let user = {
          email: this.props.user.email,
          name: this.refs.name.value,
          location: this.refs.location.value,
          password: this.props.user.password,
        }

        console.log(this.props)

        Users.editProfile(user)
        .then(response => {
          console.log("In then")
          console.log(response)
          if(response){
            this.props.login()
          }
          else{
            console.log('user not found')
          }
        })
        .catch(err => {
          console.log("In CATCH")
          console.log(err);
        }
        )
        console.log("USER MODEL", this.props.user)
      }




  render(){
    return(
      <form className='ClassForm' onSubmit={this.handleSubmit}>
          <h2>Edit Profile</h2>
            <div className='form-group'>
              <label htmlFor = 'text' > Name </label>
              <input type = 'text' className = 'form-control' ref='name'/>
            </div>
             <div className='form-group'>
              <label htmlFor = 'text' > Location </label>
              <input type = 'text' className = 'form-control' ref='location'/>
            </div>
            <button type = 'submit'>
              Edit
            </button>
        </form>

    );
  }
}

export default EditProfile;
