import * as React from "react";
import "./Header.scss";

import { faBell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import SearchInput from "./SearchInput";
import UserBlock from "./UserBlock";

export default function Header() {
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
