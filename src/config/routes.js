import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SignIn from '../components/SignInBtn';
import Profile from '../components/Profile';

export default (
  <Switch>
    <Route path='/signin' component={ SignIn }/>
    <Route path='/profile' component={ Profile }/>
  </Switch>
)
