import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import MyRoutes from './config/routes';

class App extends Component {

  state={
    loggedIn: false,
  }

  render() {
    return (
      <div className="App">
        <NavBar loggedIn={this.state.loggedIn} />
        { MyRoutes }
      </div>
    );
  }
}

export default App;
