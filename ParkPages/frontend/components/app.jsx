import React from 'react';
import { connect } from 'react-redux';
import HeaderContainer from './header/header_container';

const App = ( props ) => {
    return (
      <div>
        <HeaderContainer />
        { props.children }
      </div>
    );
};


export default App;
