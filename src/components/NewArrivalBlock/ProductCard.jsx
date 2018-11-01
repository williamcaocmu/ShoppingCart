import React, { Component } from "react";
import Thumbnail from "./Thumbnail";
import Status from "./Status";
import ShortDescription from "./ShortDescription";
import AddToCartButton from "./AddToCartButton";
import { Link, withRouter } from "react-router-dom";

class ProductCard extends Component {
  render() {
    const { product } = this.props;

    const goToDetail = id => {
      this.props.history.push(`/products/${id}`);
    };

    return (
      <div
        onClick={() => goToDetail(product.id)}
        className={`product-item active
        `}
        style={{ width: "220px", margin: "10px 0px" }}
      >
        <div className="product discount product_filter">
          <Thumbnail src={product.image} />
          <div className="favorite favorite_left" />
          <Status />
          <ShortDescription
            description={product.name}
            price={product.salePrice}
            clearPrice={product.originalPrice}
          />{" "}
        </div>{" "}
        <AddToCartButton />
      </div>
    );
  }
}

export default withRouter(ProductCard);
