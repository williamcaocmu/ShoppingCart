import React, { Component } from "react";

class PerPage extends Component {
  render() {
    return (
      <li>
        <span> Show </span> <span class="num_sorting_text"> 6 </span>{" "}
        <i class="fa fa-angle-down" />
        <ul class="sorting_num">
          <li class="num_sorting_btn">
            <span> 6 </span>{" "}
          </li>{" "}
          <li class="num_sorting_btn">
            <span> 12 </span>{" "}
          </li>{" "}
          <li class="num_sorting_btn">
            <span> 24 </span>{" "}
          </li>{" "}
        </ul>{" "}
      </li>
    );
  }
}

export default PerPage;
