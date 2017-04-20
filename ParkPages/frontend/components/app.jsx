import React from 'react';
import GreetingContainer from './greeting/greeting_container';

const App = ({ children }) => {
  return(
    <div>
      <GreetingContainer />
      { children }
    </div>
  );
};

export default App;

// <img src=" " alt="Smiley face" height="42" width="42"/>
