import * as React from "react";
import "./LeftMenu.css";

import {
  faChartBar,
  faHistory,
  faHome,
  faUserFriends,
  faPlus
} from "@fortawesome/free-solid-svg-icons";
import { MenuLink } from "./MenuLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class LeftMenu extends React.Component {
  public render() {
    return (
      <div className="LeftMenuWrapper">
        <div className="Logo">react-d3</div>
        <button className="AddButton">
          <FontAwesomeIcon icon={faPlus} className="ButtonIcon"/> Create new Chart
        </button>
        <MenuLink to="/dashboard" label="Dashboard" icon={faHome} />
        <MenuLink to="/transactions" label="Transactions" icon={faChartBar} />
        <MenuLink to="/accounts" label="Accounts" icon={faUserFriends} />
        <MenuLink to="/history" label="History" icon={faHistory} />
      </div>
    );
  }
}

export default LeftMenu;
