import React, { Component } from "react";
import Utilities from "../components/Utilities";

class Ceramics extends Component {
  state = {};

  componentDidMount() {
    Utilities.makeCursorLinkBehavior();
  }

  render() {
    return (
      <main>
        <div className="container-fluid ">
          <div className="row">
            <div className="col-md-12 col-lg-6 p-3">
              <h1 className="ceramics-intro display-4">
                When I'm not pushing pixels on my computer, I can sometimes be
                found pushing clay on the wheel.
              </h1>
            </div>
            <div className="col-md-12 col-lg-6 p-3">
              <div className="image-container">
                <img alt="ceramics" src={require("../assets/ceramics-1.jpg")} />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-12 col-md-4 p-3">
              <div className="image-container">
                <img alt="ceramics" src={require("../assets/ceramics-3.jpg")} />
              </div>
            </div>
            <div className="col-sm-12 col-md-4 p-3">
              <div className="image-container">
                <img alt="ceramics" src={require("../assets/ceramics-5.jpg")} />
              </div>
            </div>
            <div className="col-sm-12 col-md-4 p-3">
              <div className="image-container">
                <img alt="ceramics" src={require("../assets/ceramics-6.jpg")} />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-12 col-md-4 p-3">
              <div className="image-container">
                <img
                  alt="ceramics"
                  src={require("../assets/ceramics-14.jpg")}
                />
              </div>
            </div>
            <div className="col-sm-12 col-md-4 p-3">
              <div className="image-container">
                <img
                  alt="ceramics"
                  src={require("../assets/ceramics-15.jpg")}
                />
              </div>
            </div>
            <div className="col-sm-12 col-md-4 p-3">
              <div className="image-container">
                <img
                  alt="ceramics"
                  src={require("../assets/ceramics-10.jpg")}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default Ceramics;
