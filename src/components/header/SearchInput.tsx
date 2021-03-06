import * as React from "react";
import "./SearchInput.scss";

import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SearchInput() {
  return (
    <div className="SearchInputWrapper">
      <FontAwesomeIcon icon={faSearch} size="1x" className="SearchIcon" />
      <input placeholder="Type in to search" className="SearchInput" />
    </div>
  );
}
