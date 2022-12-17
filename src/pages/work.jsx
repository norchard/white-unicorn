import React, { Component } from "react";
import Utilities from "../components/Utilities";
import { NavLink as Link } from "react-router-dom";

class Work extends Component {
  state = {};

  componentDidMount() {
    Utilities.makeCursorLinkBehavior();
    Utilities.FadeInUp("projects-1");
    Utilities.FadeInUp("projects-2");
  }

  render() {
    return (
      <main id="work-main">
        <div className="container-fluid">
          <div className="row m-4">
            <div className="work-intro">
              <h4 className="display-4">
                This portfolio website inspired by the elegant design of{" "}
                <a target="blank" href="https://whiteunicornagency.com/">
                  White Unicorn Agency
                </a>{" "}
                is my latest front-end development project.
              </h4>
              <a
                target="blank"
                href="https://github.com/norchard/new-portfolio"
              >
                <button style={{ padding: "0px" }} className="button plain">
                  View The Code
                </button>
              </a>
              <p>
                I built this site using React, React-Router-DOM, and Bootstrap.
                I don't take credit for the design, but I do take credit for the
                code. Another project is in the works, but in the meanwhile,
                enjoy a couple of old programming projects and recent web design
                work.
              </p>
            </div>
          </div>
          <div id="projects-1" className="row m-4">
            <div className="col-md-12 col-lg-6">
              <a
                target="blank"
                href="https://medium.com/@norchard/an-intro-to-compilers-964aaf9d3534"
              >
                <div className="project-tile full-width">
                  <h1>An Intro to Compilers</h1>
                  <div className="work image-container">
                    <img
                      alt="ceramics"
                      src={require("../assets/compiler-1.jpg")}
                    />
                  </div>
                  <h3 className="image-title">
                    Former Hacker News #1 Blog Post
                  </h3>
                </div>
              </a>
            </div>
            <div className="col-md-12 col-lg-6">
              <Link to="/work/minesweeper">
                <div className="project-tile full-width">
                  <h1>Minesweeper</h1>
                  <div className="work image-container">
                    <img
                      alt="ceramics"
                      src={require("../assets/minesweeper.png")}
                    />
                  </div>
                  <h3 className="image-title">
                    The classic game build with React
                  </h3>
                </div>
              </Link>
            </div>
          </div>
          <div id="projects-2" className="row m-4">
            <div className="col-md-12 col-lg-6">
              <a target="blank" href="https://nelson-farms.com/">
                <div className="project-tile full-width">
                  <h1>Nelson Farms</h1>
                  <div className="work image-container">
                    <img
                      alt="ceramics"
                      src={require("../assets/nelson-farms.jpg")}
                    />
                  </div>
                  <h3 className="image-title">Web Design</h3>
                </div>
              </a>
            </div>
            <div className="col-md-12 col-lg-6">
              <a target="blank" href="https://kangaroosmiles.com">
                <div className="project-tile full-width">
                  <h1>Kangaroo Smiles</h1>
                  <div className="work image-container">
                    <img
                      alt="ceramics"
                      src={require("../assets/kangaroo-desktop.jpg")}
                    />
                  </div>
                  <h3 className="image-title">Web Design</h3>
                </div>
              </a>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default Work;
