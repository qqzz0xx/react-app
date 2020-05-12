import React from 'react';
import './App.scss';
import TitleBar from './TitleBar';
import StatusBar from './StatusBar';

function App() {
  return (
    <div className="app-shell">
      <TitleBar />
      <div className="app-main">
        <TitleBar />
      </div>
      <StatusBar />
    </div>
  );
}

export default App;
