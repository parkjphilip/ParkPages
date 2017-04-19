import React from 'react';
import GreetingContainer from './greeting/greeting_container';

const App = ( props ) => {
  return(
    <div>
      <h1>Park Pages App Page</h1>
      <GreetingContainer />
      { props.children }
    </div>
  );
};

export default App;
