import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SignIn from '../components/SignInBtn';

export default (
  <Switch>
    <Route path='/signin' component={ SignIn }/>
    {/* <Route path='/todos' component={ TodosContainer }/> */}
  </Switch>
)