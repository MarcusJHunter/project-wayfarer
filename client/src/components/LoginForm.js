import React, {Component} from 'react';
import Users from '../models/UserModel';

class LoginForm extends Component {


    state = {

    };


    // componentDidMount = () => {
    //   var ls = window.localStorage;

    //   ls.setItem('email', 'test');
    //   console.log(ls.getItem('email'));
    // }


  // validateForm() {
  //   return this.state.email.length > 0 && this.state.password.length > 0;
  // }

  // handleChange = event => {
  //   this.setState({
  //     [event.id]: event.value
  //   });
  // }

  handleSubmit = event => {
    event.preventDefault();

    let email = this.refs.email.value;
    let password = this.refs.password.value;

    Users.getUser(email, password)
      .then(response => {
        console.log(response)
        if(response.data == "Succesful Call"){
          window.localStorage.setItem('user',response.data.email)
          this.props.login(response.data.email);
        }
        else{
          console.log('user not found')
        }

      })
      .catch(err => {
        console.log(err);

        console.log("In catch")

      })
    }


  render() {
    return(
      <form className='ClassForm' onSubmit={this.handleSubmit}>
          <h2>Login</h2>
            <div className='form-group'>
            <label htmlFor = 'email' > Email address </label>
            <input type = 'email' className = 'form-control' ref='email' id="email"/>
            </div>
            <div className = 'form-group'>
            <label htmlFor = 'password' > Password </label>
            <input type = 'password' className = 'form-control' ref='password' id="password"/>
            </div>
            <button type = 'submit' className = 'btn btn - primary'>
            Login
            </button>
        </form>
    );
  }
}

export default LoginForm



