import React, { useEffect } from "react";
import Login from './components/login';
import Instructions from './components/instructions';
import NewTravel from './components/newTravel';
import ViewTravel from './components/viewTravel';
import DriverAndPassenger from './components/driverAndPassenger';


import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {

  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Login />
        </Route>
      
      
       
        <Route path="/instructions">
          <Instructions />
        </Route>
        <Route path="/newTravel">
          <NewTravel />
        </Route>
        <Route path="/viewTravel">
          <ViewTravel />
        </Route>
        <Route path="/driverAndPassenger">
          <DriverAndPassenger />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;