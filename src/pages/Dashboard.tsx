import * as React from "react";
import "./Dashboard.css";

// import { faCoffee } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ChartView from "../components/blocks/ChartView";

class Dashboard extends React.Component {
  public render() {
    return (
      <>
        <ChartView />
      </>
    );
  }
}

export default Dashboard;
