import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './w3.css';
import './App.css';
import Tags from './containers/Tags';
import Todos from './containers/Todos';

const App = (props) => {
  return (
    <Router>
      <div id="app-container">
        <Route component={Tags} />
        <div id="main-container">
          <Route path="/todo/:tag" component={Todos} />
        </div>
      </div>
    </Router>
  );
};


export default App;
