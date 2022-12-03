import React, { Component } from "react";
// import Image from "../components/Gallery/Image";
import Gallery from "../components/Gallery";
import Utilities from "../components/Utilities";
import { NavLink as Link } from "react-router-dom";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      images: this.generateImages(12),
    };
  }

  generateImages = (size) => {
    const images = [];
    for (var i = 0; i < size; i++) {
      images.push({
        id: i,
        url: `https://picsum.photos/300?random=${Date.now()}`,
      });
    }
    return images;
  };

  handleClick = (image) => {
    const { url, id } = image;
    const images = [...this.state.images];
    images[id] = {
      id: id,
      url: `${url.split("=")[0]}=${Date.now()}`,
    };
    this.setState({ images });
  };

  // handleMouseOver = () => {
  //   const cursor = document.getElementById("cursor");
  //   cursor.classList = "hover";
  //   const circle = document.getElementById("circle");
  //   circle.classList = "hover";
  //   // console.log("mousing over");
  //   // const tooltip = document.getElementById("tooltip");
  //   // tooltip.style.visibility = "visible";
  // };

  // handleMouseOut = () => {
  //   const cursor = document.getElementById("cursor");
  //   const circle = document.getElementById("circle");

  //   cursor.classList = "";
  //   circle.classList = "";

  //   // const tooltip = document.getElementById("tooltip");
  //   // tooltip.style.visibility = "hidden";
  // };
  componentDidMount() {
    Utilities.makeCursorLinkBehavior();
    Utilities.makeFunLetters();
  }

  render() {
    return (
      <main>
        <div className="container-fluid">
          <div className="intro">
            <h3 className="display-3">
              I am a front-end developer who enjoys re-creating work that I
              admire
            </h3>
          </div>

          {/* <div className="image-container">
          <img src={require("../assets/nelson-farms.jpg")} />{" "}
        </div> */}
          {/* <Image
          url="../../assets/nelson-farms.jpg"
          onMouseOver={this.handleMouseOver}
          onMouseOut={this.handleMouseOut}
        /> */}
          <Gallery
            images={this.state.images}
            onClick={this.handleClick}
            onMouseOver={Utilities.handleMouseOver}
            onMouseOut={Utilities.handleMouseOut}
          />
          <div>
            <Link to="/contact">
              <button className="button gradient">Hire Me</button>
            </Link>
          </div>
        </div>
      </main>
    );
  }
}

export default Home;

// <Menu onOpen={Utilities.openMenu} onClose={Utilities.closeMenu} />
// <Link onClick={Utilities.closeMenu} to="/">
//   <Logo id="logo" />
// </Link>
