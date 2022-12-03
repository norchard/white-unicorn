import React, { Component } from "react";
import MenuItem from "./Menu-Item";
import Toggle from "./Toggle";
import Utilities from "../Utilities";
import { NavLink as Link } from "react-router-dom";

class Menu extends Component {
  state = {
    menuItems: [
      { page: "about", name: "About" },
      { page: "work", name: "Work" },
      { page: "ceramics", name: "Ceramics" },
      { page: "contact", name: "Contact" },
    ],
  };
  render() {
    return (
      <div>
        <Toggle
          onOpen={this.props.onOpen}
          onClose={(e) => this.props.onClose(e)}
        />
        {/* <div
          onClick={this.props.onOpen}
          id="open-menu"
          className="toggle-menu"
        ></div> */}
        <div id="menu-body">
          <Link onClick={Utilities.closeMenu} to="/">
            <h4 id="site-name">
              Nicole <span>Orchard</span>
            </h4>
          </Link>
          <div className="row">
            <div className="d-none d-sm-none d-md-none d-lg-block col-lg-6 ">
              <img
                alt=""
                style={{ padding: "200px" }}
                src="https://picsum.photos/600?random=4"
              />
            </div>
            <div className="col-md-12 col-lg-6">
              <ul id="menu-list" className="display-1">
                {this.state.menuItems.map((item, i) => {
                  return (
                    <MenuItem
                      key={i}
                      name={item.name}
                      page={item.page}
                      index={i}
                    />
                  );
                })}
              </ul>
            </div>
          </div>
          {/* <div
            onClick={this.props.onClose}
            id="close-menu"
            className="toggle-menu"
          ></div> */}
        </div>
      </div>
    );
  }
}

export default Menu;
