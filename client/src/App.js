import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import "./App.less";
import React, { Suspense } from "react";

import Join from "./components/view/Join/Join";
import Login from "./components/view/Login/Login";
import MyPage from "./components/view/MyPage/MyPage";
import LandingPage from "./components/view/LandingPage/LandingPage.js";

import NavBar from "./components/view/NavBar/NavBar";
import Auth from "./hoc/auth";

function App() {
  return (
    <Suspense>
      <NavBar />
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Auth(LandingPage)} />
            <Route exact path="/login" component={Auth(Login, false)} />
            <Route exact path="/register" component={Auth(Join, false)} />
            <Route exact path="/mypage" component={Auth(MyPage, true)} />
            <Route
              exact
              path="/landingPage"
              component={Auth(LandingPage, null)}
            />
          </Switch>
        </div>
      </Router>
    </Suspense>
  );
}

export default App;
