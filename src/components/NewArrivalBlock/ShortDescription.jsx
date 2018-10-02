import React, { Component } from "react";

class ShortDescription extends Component {
  render() {
    return (
      <div className="product_info">
        <h6 className="product_name">
          <a>{this.props.description}</a>
        </h6>
        <div className="product_price">
          ${this.props.price}{" "}
          {this.props.clearPrice && <span> ${this.props.clearPrice} </span>}
        </div>
      </div>
    );
  }
}

export default ShortDescription;