import React, { Component } from "react";

class FilterByPrice extends Component {
  render() {
    return (
      <div className="sidebar_section">
        <div className="sidebar_title">
          <h5> Filter by Price </h5>{" "}
        </div>{" "}
        <p>
          <input
            type="text"
            id="amount"
            readOnly
            style={{
              border: "0",
              color: "#f6931f",
              fontWeight: "bold"
            }}
          />{" "}
        </p>{" "}
        <div id="slider-range" />
        <div className="filter_button">
          <span> filter </span>{" "}
        </div>{" "}
      </div>
    );
  }
}

export default FilterByPrice;
