import React, { Component } from "react";
import slider1 from "../images/slider_1.jpg";

export class HeroBanner extends Component {
  render() {
    return (
      <div>
        <div className="fs_menu_overlay" />
        <div className="hamburger_menu">
          <div className="hamburger_close">
            <i className="fa fa-times" aria-hidden="true" />
          </div>
          <div className="hamburger_menu_content text-right">
            <ul className="menu_top_nav">
              <li className="menu_item has-children">
                <a >
                  usd
                  <i className="fa fa-angle-down" />
                </a>
                <ul className="menu_selection">
                  <li>
                    <a >cad</a>
                  </li>
                  <li>
                    <a >aud</a>
                  </li>
                  <li>
                    <a >eur</a>
                  </li>
                  <li>
                    <a >gbp</a>
                  </li>
                </ul>
              </li>
              <li className="menu_item has-children">
                <a >
                  English
                  <i className="fa fa-angle-down" />
                </a>
                <ul className="menu_selection">
                  <li>
                    <a >French</a>
                  </li>
                  <li>
                    <a >Italian</a>
                  </li>
                  <li>
                    <a >German</a>
                  </li>
                  <li>
                    <a >Spanish</a>
                  </li>
                </ul>
              </li>
              <li className="menu_item has-children">
                <a >
                  My Account
                  <i className="fa fa-angle-down" />
                </a>
                <ul className="menu_selection">
                  <li>
                    <a >
                      <i className="fa fa-sign-in" aria-hidden="true" />
                      Sign In
                    </a>
                  </li>
                  <li>
                    <a >
                      <i className="fa fa-user-plus" aria-hidden="true" />
                      Register
                    </a>
                  </li>
                </ul>
              </li>
              <li className="menu_item">
                <a >home</a>
              </li>
              <li className="menu_item">
                <a href="categories.html">shop</a>
              </li>
              <li className="menu_item">
                <a >promotion</a>
              </li>
              <li className="menu_item">
                <a >pages</a>
              </li>
              <li className="menu_item">
                <a href="https://nordiccoder.com/blog" target="blank">
                  blog
                </a>
              </li>
              <li className="menu_item">
                <a >contact</a>
              </li>
            </ul>
          </div>
        </div>
        <div
          className="main_slider"
          style={{ backgroundImage: `url(${slider1})` }}
        >
          <div className="container fill_height">
            <div className="row align-items-center fill_height">
              <div className="col">
                <div className="main_slider_content">
                  <h6>Spring / Summer Collection 2017</h6>
                  <h1>Get up to 30% Off New Arrivals</h1>
                  <div className="red_button shop_now_button">
                    <a >shop now</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HeroBanner;
