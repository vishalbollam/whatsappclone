import React from 'react';
import Sidebar from'./Sidebar';
import './App.css';

function App() {
  return (
    //BEM naming conventions 
    <div className="app">
      
      <div className="app__body">
        <Sidebar/>
        {/* chat */}
      </div>
    </div>
  );
}

export default App;
