import React, { Component } from "react";

class Animation extends Component {
  state = {};

  componentDidMount() {
    const animation = document.getElementById("animation");
    const content = document.getElementById("content");

    animation.style.display = "inline-block";
    animation.style.transform = "translateY(0px)";
    content.style.display = setTimeout(() => {
      animation.style.transform = "translateY(100vh)";
      //   letter.style.opacity = 100;
    }, this.props.animationLoadTime);
  }
  render() {
    return (
      <div>
        <div id="animation"></div>
        <div id="content">{this.props.children}</div>
      </div>
    );
  }
}

export default Animation;
