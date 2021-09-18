import logo from "./logo.svg";
import {BrowserRouter as Router, Switch, Link, Route }from 'react-router-dom';
import "./App.css";

import Join from './components/view/Join/Join'
import LandingPage from './components/view/LandingPage/LandingPage.js'
function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/join"><Join/></Route>
          <Route path="/calendar"></Route>
          <Route path="/mypage">
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
