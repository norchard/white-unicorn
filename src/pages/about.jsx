import React, { Component } from "react";
import Utilities from "../components/Utilities";
import HireButton from "../components/HireButton";

class About extends Component {
  componentDidMount() {
    Utilities.makeCursorLinkBehavior();
    // const hand = document.getElementById("hand");
    // hand.style.transform = "rotate(60deg)";
    // hand.style.transition = "all 1s ease-in-out";
    // setTimeout(() => {
    //   hand.style.transform = "rotate(0deg)";
    // }, 100);
    Utilities.makeFunLetters2("intro-about");
  }

  render() {
    return (
      <main>
        {/* <div id="intro-about"> */}
        <div className="wave">
          <h1>👋 </h1>
        </div>
        <h1 id="intro-about" className="display-2">
          Hi, I'm Nicole.
        </h1>
        {/* </div> */}
        <p className="about">
          I am a self-taught web developer and graphic designer. In undergrad I
          studied History and Studio Art, but I was most capivated by my single
          typography course. After graduating, I started studying using online
          resources to get myself up to speed with graphic design tools. I
          learned quickly and began working as a designer. During those years I
          continued to study—this time focusing on programming. In 2017 I did a
          batch at the{" "}
          <a target="blank" href="https://www.recurse.com/">
            Recurse Center
          </a>{" "}
          where I studied computer science fundamentals. In between design work
          I also worked as a Software Engineer at{" "}
          <a target="blank" href="https://www.mapbox.com/">
            Mapbox
          </a>
          . Now I'm re-focusing on front-end development because I have always
          been mesmerized by the magic of creating websites. Until I find
          full-time work doing front-end development, I'll be here honing my
          craft, recreating work I admire.
        </p>
        <HireButton />
      </main>
    );
  }
}

export default About;
