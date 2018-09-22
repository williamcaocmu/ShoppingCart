import React, { Component } from "react";
import banner1 from "../images/banner_1.jpg";
import banner2 from "../images/banner_2.jpg";
import banner3 from "../images/banner_3.jpg";

export class QuickCategoryBar extends Component {
  render() {
    return (
      <div>
        <div className="banner">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div
                  className="banner_item align-items-center"
                  style={{
                    backgroundImage: `url(${banner1})`
                  }}
                >
                  <div className="banner_category">
                    <a href="categories.html"> women 's</a>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
              <div className="col-md-4">
                <div
                  className="banner_item align-items-center"
                  style={{
                    backgroundImage: `url(${banner2})`
                  }}
                >
                  <div className="banner_category">
                    <a href="categories.html"> accessories 's</a>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
              <div className="col-md-4">
                <div
                  className="banner_item align-items-center"
                  style={{
                    backgroundImage: `url(${banner3})`
                  }}
                >
                  <div className="banner_category">
                    <a href="categories.html"> men 's</a>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>
    );
  }
}

export default QuickCategoryBar;
