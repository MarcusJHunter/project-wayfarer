import react, {Component} from 'react'


class Login extends Component {

    state = {
      email: "",
      password: ""
    };


  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.id]: event.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
  }

  render() {
    return(
       <div className = "Login">
         <form onSubmit = {this.handleSubmit}>
          <FormGroup controlId = "email" bsSize = "large">
            <ControlLabel> Email </ControlLabel>
             <FormControl
             autoFocus
             type = 'email'
             value = {this.state.email}
             onChange = {this.handleChange}
             />
            </FormGroup>
            <FormGroup controlId = "password" bsSize = "large" >
              <ControlLabel> Password </ControlLabel>
              <FormControl
                value = {this.state.password}
                onChange = {this.handleChange}
                type = "password"
               />
            </FormGroup>
             <Button
             block
             bsSize = "large"
             disabled = {!this.validateForm()
             }
             type = "submit"
             >
             Login
             </Button>
         </form>
      </div>
    );
  }
}
