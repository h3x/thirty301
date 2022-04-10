import React from 'react';
import './App.scss';
import SideMenu from './components/SideMenu';
import SingleSymbol from './components/SingleSymbol';

function App() {
  return (
    <div className="columns">
    <div className="column is-one-fifth">
        <SideMenu />
    </div>
    
    <div className="column">
      <SingleSymbol />
    </div>
      
      
    </div>
  );
}

export default App;
