import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import { Switch, Route } from 'react-router-dom';
import SignIn from './components/SignInBtn';
import Profile from './components/Profile';
import HomepageContainer from './containers/HomepageContainer';
import TopicContainer from './containers/TopicContainer';
import MyRoutes from './config/routes';

class App extends Component {

  state = {
    loggedIn: false,
    user: {},
  }

    componentDidMount = () => {

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
        <MyRoutes user={this.state.user} loggedIn={this.state.loggedIn} />
      </div>
    );
  }
}

export default App;
