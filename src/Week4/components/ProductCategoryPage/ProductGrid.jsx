import React from "react";

const ProductGrid = props => {
  const renderList = list =>
    list.length > 0 ? (
      list.map(item => (
        <div
          style={{
            margin: "10px 30px"
          }}
          key={item.id}
          className="product-item "
          onClick={() => console.log("event")}
        >
          <div className="product discount product_filter">
            <div className="product_image">
              <img src={item.image} alt={item.name} />{" "}
            </div>{" "}
            <div className="favorite favorite_left" />
            <div className="product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center">
              <span> -$20 </span>{" "}
            </div>{" "}
            <div className="product_info">
              <h6 className="product_name">
                <a> {item.name} </a>{" "}
              </h6>{" "}
              <div className="product_price">
                $ {parseFloat(item.salePrice.toLocaleString()).toFixed(2)}{" "}
                <span> $ {item.originalPrice} </span>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
          <div className="red_button add_to_cart_button">
            <a> add to cart </a>{" "}
          </div>{" "}
        </div>
      ))
    ) : (
      <h3> Vui Lòng Chọn Danh Mục </h3>
    );

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap"
      }}
      className="product-grid"
    >
      {renderList(props.products)}
    </div>
  );
};

export default ProductGrid;
