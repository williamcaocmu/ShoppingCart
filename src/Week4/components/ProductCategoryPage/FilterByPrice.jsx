import React, { Component } from "react";

class FilterByPrice extends Component {
  render() {
    return (
      <div class="sidebar_section">
        <div class="sidebar_title">
          <h5> Filter by Price </h5>{" "}
        </div>{" "}
        <p>
          <input
            type="text"
            id="amount"
            readonly
            style={{
              border: "0",
              color: "#f6931f",
              fontWeight: "bold"
            }}
          />{" "}
        </p>{" "}
        <div id="slider-range" />
        <div class="filter_button">
          <span> filter </span>{" "}
        </div>{" "}
      </div>
    );
  }
}

export default FilterByPrice;
