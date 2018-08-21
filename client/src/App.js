import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import MyRoutes from './config/routes';

class App extends Component {

  state = {
    loggedIn: false,
    user: ''
  }

  login = (email) => {
    this.setState({
      loggedIn: true,
      user: email,
    })
  }

  logout = () => {
    this.setState({
      loggedIn: false,
      user: '',
    })
  }

  render() {
    console.log('storage',window.localStorage.getItem('user'));
    console.log(this.state.user)
    return (
      <div className="App">
        <NavBar login={this.login} loggedIn={this.state.loggedIn} user={this.state.user} />
        { MyRoutes }
      </div>
    );
  }
}

export default App;
