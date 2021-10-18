import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import "./App.less";
import React, { Suspense } from "react";

import Join from "./components/view/Join/Join";
import Login from "./components/view/Login/Login";
import MyPage from "./components/view/MyPage/MyPage";
import LandingPage from "./components/view/LandingPage/LandingPage.js";

import NavBar from "./components/view/NavBar/NavBar";
import Auth from "./hoc/auth";
import MyMedicine from "./components/view/Medicine/MyMedicine";
import Counsel from "./components/view/Counsel/Counsel";
// import Medicine from "./components/view/Medicine/Medicine";
import Footer from "./components/view/Footer/Footer";
import ColorPicker from "./components/ColorPicker";

function App() {
  return (
    <Suspense>
      <NavBar />
      <Router basename={process.env.PUBLIC_URL}>
        <div>
          <Switch>
            <Route exact={true} path="/" component={Auth(LandingPage)} />
            <Route exact={true} path="/counsel" component={Auth(Counsel)} />
            <Route exact={true} path="/login" component={Auth(Login, false)} />
            <Route exact={true} path="/register" component={Auth(Join, false)} />
            <Route exact={true} path="/mypage" component={Auth(MyPage, true)} />
            {/* <Route exact path="/medicine" component={Auth(Medicine, true)} /> */}
            <Route exact path="/colorpicker" component={Auth(ColorPicker)} />
            <Route
              exact={true}
              path="/my-medicine"
              component={Auth(MyMedicine, true)}
            />

            <Route
              exact
              path="/landingPage"
              component={Auth(LandingPage, null)}
            />
          </Switch>
        </div>
      </Router>
      <Footer />
    </Suspense>
  );
}

export default App;
