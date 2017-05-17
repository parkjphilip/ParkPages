import React from 'react'
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import SessionFormContainer from './session_form/session_form_container';
import ParkDetailContainer from './parks/park_detail_container';
import ParkIndexContainer from './parks/park_index_container';
import UserShowContainer from './users/user_show_container';
import Home from './home/home';

const Root = ({ store }) => {

  const redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace('/parks');
    }
  };

  return (
    <Provider store={ store }>
      <Router history={ hashHistory }>
        <Route path="/" component={ App } >
          <IndexRoute component={Home} />
          <Route path="/parks" component={ParkIndexContainer} />
          <Route path="/parks/:parkId" component={ParkDetailContainer} />
        </Route>
        <Route path="/users/:userId" component={UserShowContainer}/>
        <Route path="/signup" component={SessionFormContainer} onEnter={redirectIfLoggedIn} />
        <Route path="/login" component={SessionFormContainer} onEnter={redirectIfLoggedIn} />
      </Router>
    </Provider>
  );
};

export default Root;
