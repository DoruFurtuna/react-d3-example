import * as React from "react";
import "./UserBlock.scss";

import { faSortDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Planet } from "react-kawaii";

export default function UserBlock() {
  return (
    <div className="UserBlockWrapper">
      <div className="UserBlockInner">
        <Planet size={40} mood="happy" />
        <span className="UserTitle">Hi, John</span>
        <FontAwesomeIcon icon={faSortDown} className="SortDown" />
      </div>
    </div>
  );
}
