import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import "./App.css";
import React, { Suspense } from "react";

import Join from "./view/Join/Join";
import Login from "./view/Login/Login";
import MyPage from "./view/MyPage/MyPage";
import LandingPage from "./view/LandingPage/LandingPage.js";
import Hook from "./view/Join/reacthook";

import NavBar from "./view/NavBar/NavBar";

function App() {
  return (
    <Suspense>
      <NavBar />
      <Router>
        <div>
          <Switch>
            <Route exact path="/hook" component={Hook} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/join" component={Join} />
            <Route exact path="/mypage" component={MyPage} />
            <Route exact path="/landingPage" component={LandingPage} />
          </Switch>
        </div>
      </Router>
    </Suspense>
  );
}

export default App;
