import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SignIn from '../components/SignInBtn';
import Profile from '../components/Profile';
import HomepageContainer from '../containers/HomepageContainer';
import TopicContainer from '../containers/TopicContainer';


const routes = (props) => {
  return (
    <Switch>
      <Route exact path='/' component={ TopicContainer } />
      <Route path='/signin' component={ SignIn } />
      <Route path='/profile'
        render = { () =>
          <Profile
              loggedIn={props.loggedIn}
              user={props.user}
              login={props.login}
          />
        }
      />

      <Route path='/homepage' render = { () =>
          <HomepageContainer
            loggedIn={props.loggedIn}
            user={props.user}
          />
        }
        />
    </Switch>
  )
}

export default routes;
