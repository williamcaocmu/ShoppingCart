import React, { Component } from "react";
import Thumbnail from "./Thumbnail";
import Status from "./Status";
import ShortDescription from "./ShortDescription";
import AddToCartButton from "./AddToCartButton";

class ProductCard extends Component {
  render() {
    return (
      <div
        className={`product-item ${this.props.class ? this.props.class : " "}`}
      >
        <div className="product discount product_filter">
          <Thumbnail src={this.props.src} />
          <div className="favorite favorite_left" />
          <Status />
          <ShortDescription
            description={this.props.description}
            price={this.props.price}
            clearPrice={this.props.clearPrice}
          />
        </div>
        <AddToCartButton />
      </div>
    );
  }
}

export default ProductCard;
