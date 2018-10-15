import React, { Component } from "react";

class SortingDropdown extends Component {
  render() {
    return (
      <li>
        <span class="type_sorting_text">Default Sorting</span>
        <i class="fa fa-angle-down" />
        <ul class="sorting_type">
          <li
            class="type_sorting_btn"
            data-isotope-option="{ &quot;sortBy&quot;: &quot;original-order&quot; }"
          >
            <span>Default Sorting</span>
          </li>
          <li
            class="type_sorting_btn"
            data-isotope-option="{ &quot;sortBy&quot;: &quot;price&quot; }"
          >
            <span>Price</span>
          </li>
          <li
            class="type_sorting_btn"
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
