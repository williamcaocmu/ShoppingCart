import React, { Component } from "react";

class CategoryNameListing extends Component {
  render() {
    return (
      <div class="sidebar_section">
        <div class="sidebar_title">
          <h5>Product Category</h5>
        </div>
        <ul class="sidebar_categories">
          <li>
            <a>Men</a>
          </li>
          <li class="active">
            <a>
              <span>
                <i class="fa fa-angle-double-right" aria-hidden="true" />
              </span>
              Women
            </a>
          </li>
          <li>
            <a>Accessories</a>
          </li>
          <li>
            <a>New Arrivals</a>
          </li>
          <li>
            <a>Collection</a>
          </li>
          <li>
            <a href="categories.html">shop</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default CategoryNameListing;
