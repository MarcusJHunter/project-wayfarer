import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
// import { Switch, Route } from 'react-router-dom';
// import SignIn from './components/SignInBtn';
// import Profile from './components/Profile';
// import HomepageContainer from './containers/HomepageContainer';
// import TopicContainer from './containers/TopicContainer';
import MyRoutes from './config/routes';

class App extends Component {

  state = {
    loggedIn: false,
    user: {},
  }

    componentDidMount = () => {
      if (localStorage.getItem("loggedIn") === "true"){
        let userEmail = localStorage.getItem('user');
        // console.log('APP CDM', user)
      this.setState ({
        loggedIn: true,
        user: {...this.state.user, email: userEmail}
      })
    }else{
      (localStorage.getItem("loggedIn") === "false")
      this.setState ({
        loggedIn: false,
        user: {}
      })
    }
  }

  login = (newUser) => {
    localStorage.setItem('loggedIn', true)
    this.setState({
      loggedIn: true,
      user: newUser,
    })
  }

  logout = (newUser) => {
    localStorage.setItem('user', null);
    localStorage.setItem('loggedIn', false);
    this.setState({
      loggedIn: false,
      user: newUser,
    })
  }

  render() {

    return (
      <div className="App">
        <NavBar login={this.login} loggedIn={this.state.loggedIn} user={this.state.user} logout={this.logout} />
        <MyRoutes user={this.state.user} loggedIn={this.state.loggedIn} />
      </div>
    );
  }
}

export default App;
