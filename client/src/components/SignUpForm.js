import React, {Component} from 'react';
import Users from '../models/UserModel';


class SignUpForm extends Component {

  state = {
    email: '',
    password: '',
    confirmpassword:'',
    location: '',

  }

    validateForm() {
      if('password' !== 'confirmpassword'){
        console.log('passwords dont match!')
      }

      return this.state.email.length > 0 && this.state.password.length > 0;

    }

    handleChange = event => {
      this.setState({
        [event.id]: event.value
      });
    }

    handleSubmit = event => {
      event.preventDefault();

      let user = {
        email: this.refs.email.value,
        loacation: this.refs.location.value,
        password: this.refs.password.value,
      }


      Users.createUser(user)
        .then(response => {
          console.log(response)
          if(response){
            localStorage.setItem('user',response.data.email)
            this.props.login(response.data);
          }
          else{
            console.log('user not found')
          }

        })
        .catch(err => {
          console.log(err);


          console.log(user);

        })
      }

  render() {
      return (
        <form className='ClassForm' onSubmit={this.handleSubmit}>
          <h2>Sign Up</h2>
            <div className='form-group'>
            <label htmlFor = 'email' > Email address </label>
            <input type = 'email' className = 'form-control' ref='email'/>
            </div>
             <div className='form-group'>
            <label htmlFor = 'text' > Location </label>
            <input type = 'text' className = 'form-control' ref='location'/>
            </div>
            <div className = 'form-group'>
            <label htmlFor = 'password' > Password </label>
            <input type = 'password' className = 'form-control' ref = 'password'/>
            </div>
              <div className = 'form-group'>
            <label htmlFor = 'password' > Confirm Password </label>
            <input type = 'password' className = 'form-control' ref = 'confirmpassword'/>
            </div>
            <button type = 'submit' className = 'btn btn-primary' >
            Sign up
            </button>
        </form>
      )};
}

export default SignUpForm;
