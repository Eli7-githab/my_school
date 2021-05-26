// import Login  from './components/login'
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//          <Router>
//         <Switch>
//         <Route path="/">
//              <Login/>
//         </Route>
//      </Switch>
//      </Router>
//    </div>     
//   )
// }

//export default App;
import React from "react";
import Login from './components/login';
import TeacherEnter from './components/teacherEnter';
import StudentEnter from './components/studentEnter';
import NewClassRoom from './components/newClassRoom';
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
        <Route path="/teacher">
          <TeacherEnter />
        </Route>
        <Route path="/student">
          <StudentEnter />
        </Route>
        <Route path="/newClassRoom">
          <NewClassRoom />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;