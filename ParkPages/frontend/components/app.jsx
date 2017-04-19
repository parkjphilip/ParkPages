import React from 'react';
import GreetingContainer from './greeting/greeting_container';

const App = ( props ) => {
  return(
    <div>
      <header>
        <GreetingContainer />
      </header>
      { props.children }
    </div>
  );
};

export default App;
