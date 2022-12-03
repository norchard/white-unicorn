import React, { Component } from "react";
import { NavLink as Link } from "react-router-dom";
import Utilities from "../Utilities";

class MenuItem extends Component {
  state = {};
  render() {
    return (
      <li className="menu-item">
        <Link
          activeclassname="active"
          onClick={(e) => {
            Utilities.closeMenu(e);
          }}
          to={`/${this.props.page}`}
          className="menu-link"
        >
          <h4 className="index">0{this.props.index + 1}</h4>

          <span className="stack-text">{this.props.name}</span>
          <span className="stack-text">{this.props.name}</span>
        </Link>
        {/* <a href="#" className="menu-link">
          <span className="stack-text">{this.props.name}</span>
          <span className="stack-text">{this.props.name}</span>
        </a> */}
      </li>
    );
  }
}

export default MenuItem;
