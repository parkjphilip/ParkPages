//React
import React from 'react';
import ReactDOM from 'react-dom';
//Components
import Root from './components/root';
import configureStore from './store/store';
import { login, logout, signup } from './actions/session_actions'


document.addEventListener('DOMContentLoaded', () => {
    let store;
    if (window.currentUser) {
      const preloadedState = { session: { currentUser: window.currentUser } };
      store = configureStore(preloadedState);
    } else {
      store = configureStore();
    }
    const root = document.getElementById("root");
    ReactDOM.render(<Root store={store} />, root);
});




// window.store = store;
// window.login = login;
// window.logout = logout;
// window.signup = signup;
