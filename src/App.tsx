import * as React from "react";
import "./App.scss";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/header/Header";
import LeftMenu from "./components/LeftMenu";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Router>
      <div className="App">
        <LeftMenu />
        <div className="AppContent">
          <Header />
          <div className="RouterOutlet">
            <Switch>
              <Route path="/" exact={true} component={Dashboard} />
              <Route path="/dashboard" exact={true} component={Dashboard} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}
