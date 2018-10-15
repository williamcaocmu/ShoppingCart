import React, { Component } from "react";

class Status extends Component {
  render() {
    return (
      <div className="product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center">
        {/* <span>new</span> */}
        <span> -$20 </span>{" "}
      </div>
    );
  }
}

export default Status;
