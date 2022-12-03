import React, { Component } from "react";
import { NavLink as Link } from "react-router-dom";
import Utilities from "./Utilities";

class HireButton extends Component {
  componentDidMount() {
    Utilities.FadeInUp("hire-me");
  }

  render() {
    return (
      <div id="hire-me">
        <Link to="/contact">
          <button className="button gradient">Hire Me</button>
        </Link>
      </div>
    );
  }
}

export default HireButton;
