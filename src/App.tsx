import * as React from "react";
import "./App.scss";

// import { faCoffee } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/header/Header";
import LeftMenu from "./components/LeftMenu";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";

class App extends React.Component {
  public render() {
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
}

export default App;
