import React from "react";

const QuantitySelection = props => {
  console.log(props);
  const { quantity, add, minus } = props;
  const displayItem = quantity === 1 ? true : false;
  return (
    <div style={{ display: "inline-block" }}>
      <span>Quantity:</span>
      <div className="quantity_selector">
        <span onClick={() => minus()} className="minus">
          <i
            style={{ disable: `${quantity === 1 ? true : false}` }}
            className="fa fa-minus"
            aria-hidden="true"
          />
        </span>
        <span id="quantity_value">{quantity}</span>
        <span onClick={() => add()} className="plus">
          <i className="fa fa-plus" aria-hidden="true" />
        </span>
      </div>
    </div>
  );
};

export default QuantitySelection;
