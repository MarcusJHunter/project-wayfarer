import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SignIn from '../components/SignInBtn';
import Profile from '../components/Profile';
import HomepageContainer from '../containers/HomepageContainer';
import TopicContainer from '../containers/TopicContainer';

export default (
  <Switch>
    <Route exact path='/' component={ TopicContainer } />
    <Route path='/signin' component={ SignIn } />
    <Route path='/profile' component={ Profile } />
    <Route path='/homepage' component={ HomepageContainer } />
  </Switch>
)