import React from "react";

function ProductDescription(props) {
  console.log(props.totalPrice());
  return (
    <div>
      <div className="product_details_title">
        <h2>Pocket cotton sweatshirt</h2>
        <p>
          Nam tempus turpis at metus scelerisque placerat nulla deumantos
          solicitud felis. Pellentesque diam dolor, elementum etos lobortis des
          mollis ut...
        </p>
      </div>
      <div className="free_delivery d-flex flex-row align-items-center justify-content-center">
        <span className="ti-truck" />
        <span>free delivery</span>
      </div>
      <div className="original_price">$629.99</div>
      <div className="product_price">{props.totalPrice()}</div>
      <ul className="star_rating">
        <li>
          <i className="fa fa-star" aria-hidden="true" />
        </li>
        <li>
          <i className="fa fa-star" aria-hidden="true" />
        </li>
        <li>
          <i className="fa fa-star" aria-hidden="true" />
        </li>
        <li>
          <i className="fa fa-star" aria-hidden="true" />
        </li>
        <li>
          <i className="fa fa-star-o" aria-hidden="true" />
        </li>
      </ul>
      <div className="product_color">
        <span>Select Color:</span>
        <ul>
          <li style={{ background: "#e54e5d" }} />
          <li style={{ background: "#252525" }} />
          <li style={{ background: "#60b3f3" }} />
        </ul>
      </div>
    </div>
  );
}

export default ProductDescription;
