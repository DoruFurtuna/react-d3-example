import * as React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { RouteComponentProps } from "react-router-dom";
import { Link, Route } from "react-router-dom";

import { Props, State } from "./MenuLink.d";
import "./MenuLink.scss";

export class MenuLink extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.itemLink = this.itemLink.bind(this);
  }

  public itemLink({ match }: RouteComponentProps) {
    const { icon, label, to } = this.props;

    return (
      <div className={"MenuLink" + (match ? " active" : "")}>
        <Link to={to}>
          <span className="before" />
          <FontAwesomeIcon icon={icon} size="1x" className="icon" />
          {label}
        </Link>
      </div>
    );
  }

  public render() {
    return <Route path={this.props.to} children={this.itemLink} />;
  }
}
