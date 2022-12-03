import React, { Component } from "react";

class Image extends Component {
  state = {};
  render() {
    return (
      <div className="project-tile">
        <div className="gallery image-container">
          <img
            alt=""
            key={this.props.id}
            src={this.props.url + `?random=${this.props.id}`}
            onClick={() => this.props.onClick(this.props)}
            onMouseOver={this.props.onMouseOver}
            onMouseOut={this.props.onMouseOut}
          />
        </div>
        <h3 className="image-title">Click for a new image</h3>
      </div>
    );
  }
}

export default Image;
