//React
import React from 'react';
import ReactDOM from 'react-dom';
//Components
// import Root from './components/root';
// import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById("root");
    ReactDOM.render(<h2>Welcome to ParkPages</h2>, root);
});
//
// document.addEventListener('DOMContentLoaded', () => {
//   // let store;
//   // if (window.currentUser) {
//   //   const preloadedState = { session: { currentUser: window.currentUser } };
//   //   store = configureStore(preloadedState);
//   // } else {
//   //   store = configureStore();
//   // }
//
//   const root = document.getElementById('root');
//   ReactDOM.render(<h1> welcome </h1>, root);
// });
