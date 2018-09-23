import React, { Component } from "react";

export class Header extends Component {
  render() {
    return (
      <div>
        <header className="header trans_300">
          <div className="top_nav">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <div className="top_nav_left">
                    free shipping on all u.s orders over $50
                  </div>
                </div>
                <div className="col-md-6 text-right">
                  <div className="top_nav_right">
                    <ul className="top_nav_menu">
                      <li className="language">
                        <a >
                          English
                          <i className="fa fa-angle-down" />
                        </a>
                        <ul className="language_selection">
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
                      <li className="account">
                        <a >
                          My Account
                          <i className="fa fa-angle-down" />
                        </a>
                        <ul className="account_selection">
                          <li>
                            <a >
                              <i className="fa fa-sign-in" aria-hidden="true" />
                              Sign In
                            </a>
                          </li>
                          <li>
                            <a >
                              <i
                                className="fa fa-user-plus"
                                aria-hidden="true"
                              />
                              Register
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="main_nav_container">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 text-right">
                  <div className="logo_container">
                    <a >
                      Nordic
                      <span>Shop</span>
                    </a>
                  </div>
                  <nav className="navbar">
                    <ul className="navbar_menu">
                      <li>
                        <a >home</a>
                      </li>
                      <li>
                        <a href="categories.html">shop</a>
                      </li>
                      <li>
                        <a >promotion</a>
                      </li>
                      <li>
                        <a href="https://nordiccoder.com/blog" target="blank">
                          blog
                        </a>
                      </li>
                      <li>
                        <a href="contact.html">contact</a>
                      </li>
                    </ul>
                    <ul className="navbar_user">
                      <li className="checkout">
                        <a >
                          <i
                            className="fa fa-shopping-cart"
                            aria-hidden="true"
                          />
                          <span id="checkout_items" className="checkout_items">
                            2
                          </span>
                        </a>
                      </li>
                    </ul>
                    <div className="hamburger_container">
                      <i className="fa fa-bars" aria-hidden="true" />
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default Header;
