import * as React from "react";
import "./Header.scss";

import { faBell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import SearchInput from "./SearchInput";
import UserBlock from "./UserBlock";

class Header extends React.Component {
  public render() {
    return (
      <div className="HeaderWrapper">
        <SearchInput />

        <div className="Notifications">
          <span className="ActiveCircle" />
          <FontAwesomeIcon icon={faBell} className="BellIcon" />
        </div>

        <UserBlock />
      </div>
    );
  }
}

export default Header;
