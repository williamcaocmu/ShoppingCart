import React, { Component } from "react";

class Thumbnail extends Component {
  render() {
    return (
      <div className="product_image">
        <img src={this.props.src} alt="" />
      </div>
    );
  }
}

export default Thumbnail;
