import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import MyRoutes from './config/routes';

class App extends Component {

  state = {
    loggedIn: false,
    user: {}
  }


  login = (newUser) => {

    this.setState({
      loggedIn: true,
      user: newUser,
    })
  }

  logout = () => {
    localStorage.setItem('user', null);
    this.setState({
      loggedIn: false,
      user: {},
    })
  }

  render() {

    return (
      <div className="App">
        <NavBar login={this.login} loggedIn={this.state.loggedIn} user={this.state.user} />
        { MyRoutes }
      </div>
    );
  }
}

export default App;
