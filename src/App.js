import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages";
import About from "./pages/about";
import Work from "./pages/work";
import Ceramics from "./pages/ceramics";
import Contact from "./pages/contact";
import IntroToCompilers from "./pages/intro-to-compilers.jsx";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Utilities from "./components/Utilities";
import ScrollToTop from "./components/ScrollToTop";
import Minesweeper from "./projects/Minesweeper";

class App extends Component {
  // state = { animationLoadTime: 1000 };

  handleCursor = () => {
    const circle = document.getElementById("circle");
    const cursor = document.getElementById("cursor");
    window.addEventListener("mousemove", (e) => {
      const x = e.clientX;
      const y = e.clientY;
      // circle.style.transform = `translate3d(${x}px, ${y}px, 0)`;

      cursor.style.left = `${x + 5}px`;
      cursor.style.top = `${y + 5}px`;
      // cursor.style.transition = "transform 1s ease-in";
      setTimeout(() => {
        circle.style.left = `${x - 20.5}px`;
        circle.style.top = `${y - 20.5}px`;
      }, "20");
    });
  };

  toggleBackground = () => {
    const app = document.getElementsByClassName("App")[0];
    const toggleButton = document.getElementById("toggle-background");
    if (app.classList.contains("white")) {
      app.classList.remove("white");
      toggleButton.classList.remove("white");
    } else {
      app.classList.add("white");
      toggleButton.classList.add("white");
    }
  };

  handleScroll = () => {
    var lastScrollTop = 0;
    const logo = document.getElementById("logo");
    const toggleBackground = document.getElementById("toggle-background");
    const menu = document.getElementById("menu-toggle");

    const hideHeader = () => {
      if (lastScrollTop < window.scrollY) {
        logo.classList.add("hidden");
        toggleBackground.classList.add("hidden");
        menu.classList.add("hidden");
      } else {
        logo.classList.remove("hidden");
        toggleBackground.classList.remove("hidden");
        menu.classList.remove("hidden");
      }
      lastScrollTop = window.scrollY;
    };
    // const showScrollBar = () => {
    //   document.body.style.overflow = "overlay";
    // };

    // var timer = null;
    window.addEventListener("scroll", hideHeader);

    // window.addEventListener("scroll", () => {
    //   if (document.body.scrollTop === 0) {
    //     const menu = document.getElementById("menu-body");
    //     logo.classList.remove("hidden");
    //     toggleBackground.classList.remove("hidden");
    //     menu.classList.remove("hidden");
    //   }
    // });
    // window.addEventListener("scroll", () => {
    //   const button = document.getElementById("hire-me");
    //   console.log(button.getBoundingClientRect().top);
    // });

    // window.addEventListener("scroll", showScrollBar);
    // window.addEventListener(
    //   "scroll",
    //   () => {
    //     if (timer !== null) {
    //       clearTimeout(timer);
    //     }
    //     timer = setTimeout(function () {
    //       document.body.style.overflow = "hidden";
    //     }, 150);
    //   },
    //   false
    // );
    // const menuToggle = document.getElementById("menu-toggle");
    // menuToggle.addEventListener("click", (e) => {
    //   window.removeEventListener("scroll", hideHeader);
    // });
    // // if (menu.style.display == "block") {
    // //   window.removeEventListener("scroll", hideHeader);
    // }
  };

  componentDidMount() {
    this.handleScroll();

    const links = document.getElementsByTagName("a");
    const menuToggle = document.getElementById("menu-toggle");
    const menuItem = document.getElementsByClassName("menu-link");
    menuToggle.addEventListener("mouseover", Utilities.handleMouseOver);
    menuToggle.addEventListener("mouseout", Utilities.handleMouseOut);
    for (let item of menuItem) {
      item.addEventListener("mouseover", Utilities.handleMouseOver);
      item.addEventListener("mouseout", Utilities.handleMouseOut);
    }
    for (let link of links) {
      link.addEventListener("mouseover", Utilities.handleMouseOver);
      link.addEventListener("mouseout", Utilities.handleMouseOut);
      link.addEventListener("click", Utilities.handleMouseOut);
    }
    window.addEventListener("mousemove", this.handleCursor);
  }

  componentDidUpdate() {
    window.addEventListener("mousemove", this.handleCursor);
  }

  render() {
    return (
      <div className="App dark">
        <Router>
          <ScrollToTop />
          <span id="cursor"></span>
          <span id="circle"></span>
          <Header onToggleBackground={this.toggleBackground} />
          <Routes>
            <Route exact="true" path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/work" element={<Work />} />
            <Route path="/ceramics" element={<Ceramics />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/work/minesweeper" element={<Minesweeper />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
