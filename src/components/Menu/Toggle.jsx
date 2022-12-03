import React, { Component } from "react";

class Toggle extends Component {
  //  componentDidMount() {
  //     const toggle = document.getElementById("menu-toggle");
  //         toggle.addEventListener("click", () => {
  //   const bars = document.getElementsByClassName("bar");
  //   for (let i = 0; i< bars.length; i++){
  //     if (bars[i].classList.contains("ex")){
  //       bars[i].classList.remove("ex");
  //     } else bars[i].classList.add("ex");
  //   }
  // })
  //   }
  //   }
  //   toggleX = (e) => {
  //     const bars = document.getElementsByClassName("bar");
  //     for (const bar in bars) {
  //       if (bar.classList.contains("ex")) {
  //         bar.classList.remove("ex");
  //       } else bar.classList.add("ex");
  //     }
  //   };

  render() {
    return (
      <div
        onClick={(e) => {
          if (
            e.target.classList.contains("open") ||
            e.target.parentElement.classList.contains("open")
          ) {
            this.props.onClose(e);
          } else {
            this.props.onOpen();
          }
        }}
        id="menu-toggle"
      >
        <div className="bar a"></div>
        <div className="bar b"></div>
        <div className="bar c"></div>
      </div>
    );
  }
}

export default Toggle;
