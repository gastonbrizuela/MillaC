import React, { useState,useEffect } from 'react';
import Login from './pages/Login'
import Main from './pages/Main'
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Tables from './components/Tables';
import CreateCamp from './components/CreateCamp'
import Resume from './components/Resume';

function App() {
  /*Swich se detiene en el primero que coincide, sin el hace el render sobre cualquier que coincida
  sin el exact busca una minima coincidencia*/
  return (
    
    <Router>
      <Switch>
      <Route exact path='/login'>
        <Login></Login>
      </Route>
      <div className="principal-loyout">
      <Main></Main>
      <Route path='/main/campaign'>
      <div className="container">
        <Tables listCamp={[]}></Tables>
      </div>
      </Route>
      <Route path='/main/create'>
      <div className="container">
        <CreateCamp></CreateCamp>
      </div>
      </Route>
      <Route path='/main/createtample'>
      <div className="container">
        <h1>create tample</h1>
      </div>
      </Route>
      </div>
      </Switch>
    </Router>
    
     );
}

export default App;
