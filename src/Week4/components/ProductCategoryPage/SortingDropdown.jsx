import React, { Component } from "react";

const options = [
  {
    option: "salePrice ASC",
    display: "Price"
  },
  {
    option: ""
  }
];

class SortingDropdown extends Component {
  state = {
    selectedOption: null
  };

  renderList = list =>
    list.length > 0
      ? list.map(item => (
          <li className="type_sorting_btn">
            <span>Default Sorting</span>
          </li>
        ))
      : null;

  render() {
    return (
      <li>
        <span className="type_sorting_text">Default Sorting</span>
        <i className="fa fa-angle-down" />
        <ul className="sorting_type">
          <li
            className="type_sorting_btn"
            data-isotope-option="{ &quot;sortBy&quot;: &quot;original-order&quot; }"
          >
            <span>Default Sorting</span>
          </li>
          <li
            className="type_sorting_btn"
            data-isotope-option="{ &quot;sortBy&quot;: &quot;price&quot; }"
          >
            <span>Price</span>
          </li>
          <li
            className="type_sorting_btn"
            data-isotope-option="{ &quot;sortBy&quot;: &quot;name&quot; }"
          >
            <span>Product Name</span>
          </li>
        </ul>
      </li>
    );
  }
}

export default SortingDropdown;
