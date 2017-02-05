import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './w3.css';
import './App.css';
import Lists from './containers/Lists';
import Todos from './containers/Todos';

const App = (props) => {
  return (
    <Router>
      <div id="app-container">
        <Route component={Lists} />
        <div id="main-container">
          <Route path="/list/:list" component={Todos} />
        </div>
      </div>
    </Router>
  );
};


export default App;
