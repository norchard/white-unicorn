import React, { Component } from "react";
import Logo from "./Logo";
import Menu from "./Menu";
import { NavLink as Link } from "react-router-dom";
import Utilities from "./Utilities";

class Header extends Component {
  state = {};
  render() {
    return (
      <header>
        <Menu onOpen={Utilities.openMenu} onClose={Utilities.closeMenu} />
        <Link onClick={Utilities.closeMenu} to="/">
          <Logo id="logo" />
        </Link>
        <div
          onMouseOver={Utilities.handleMouseOver}
          onMouseOut={Utilities.handleMouseOut}
          id="toggle-background"
          onClick={this.props.onToggleBackground}
          className="button gradient"
        >
          <div id="toggle-icon"></div>
        </div>
      </header>
    );
  }
}

export default Header;
