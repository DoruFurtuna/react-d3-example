import * as React from "react";
import "./LeftMenu.css";

import { faChartBar, faHistory, faHome, faUserFriends } from "@fortawesome/free-solid-svg-icons";
import { MenuLink } from "./MenuLink";

class LeftMenu extends React.Component {
  public render() {
    return (
      <div className="LeftMenuWrapper">
        <MenuLink to="/dashboard" label="Dashboard" icon={faHome} />
        <MenuLink to="/transactions" label="Transactions" icon={faChartBar} />
        <MenuLink to="/accounts" label="Accounts" icon={faUserFriends} />
        <MenuLink to="/history" label="History" icon={faHistory} />
      </div>
    );
  }
}

export default LeftMenu;
