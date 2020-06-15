import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavMenu from './components/NavMenu.js'
import Home from './components/Home.js'
import CV from './components/CV.js'
import Portfolio from './components/Portfolio.js'

function App() {
  return (
    <div className="App">
      <NavMenu/>
      <Home/>
      <CV/>
      <Portfolio/>
    </div>
  );
}

export default App;
