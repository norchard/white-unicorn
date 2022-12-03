import React, { Component } from "react";
import Image from "./Image";

class Gallery extends Component {
  componentDidMount() {
    const gallery = document.getElementById("gallery");
    gallery.style.opacity = 0;
    gallery.style.transform = "translateY(80px)";
    gallery.style.transition = "all 1s ease-in-out";
    setTimeout(() => {
      gallery.style.opacity = 100;
      gallery.style.transform = "translateY(-80px)";
    }, 500);
  }
  render() {
    return (
      <div id="gallery">
        {this.props.images.map((image) => (
          <Image
            key={image.id}
            url={image.url}
            id={image.id}
            name={image.name}
            onClick={this.props.onClick}
            onMouseOver={this.props.onMouseOver}
            onMouseOut={this.props.onMouseOut}
          />
        ))}
      </div>
    );
  }
}

export default Gallery;
