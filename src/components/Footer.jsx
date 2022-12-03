import React, { Component } from "react";
import Logo from "./Logo";
// import { NavLink as Link } from "react-router-dom";
// import Utilities from "./Utilities";

class Footer extends Component {
  state = {};
  render() {
    return (
      <footer>
        <Logo id="footer-logo" />
        <div className="row">
          <div className="col-md-12 col-lg-4">
            <a href="tel:6094680473" className="button">
              +1 (609) 468-0473
            </a>
          </div>
          <div className="col-md-12 col-lg-4">
            <a
              target="blank"
              href="https://www.google.com/maps/place/Houston,+TX/"
              className="button"
            >
              Houston, Texas
            </a>
          </div>
          <div className="col-md-12 col-lg-4">
            <a href="mailto:norchard24@gmail.com" className="button">
              norchard24@gmail.com
            </a>
          </div>
        </div>
        <p id="credit">
          This site was inspired by &nbsp;
          <a target="blank" href="https://whiteunicornagency.com/">
            White Unicorn Agency
          </a>
          <br /> I take no credit for the design, but all of the credit for the
          code :&#41;
        </p>
      </footer>
    );
  }
}

export default Footer;
