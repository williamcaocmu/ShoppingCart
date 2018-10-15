import React, { Component } from "react";
import CategoryNameListing from "./CategoryNameListing";
import PageNavigationBar from "./PageNavigationBar";
import PerPage from "./PerPage";
import SortingDropdown from "./SortingDropdown";
import FilterByPrice from "./FilterByPrice";
import Product1 from "../../../images/product_1.png";
import Product2 from "../../../images/product_2.png";
import Product3 from "../../../images/product_3.png";
import Product4 from "../../../images/product_4.png";
import Product5 from "../../../images/product_5.png";
import Product6 from "../../../images/product_6.png";
import Product7 from "../../../images/product_7.png";
import Product8 from "../../../images/product_8.png";
import Product9 from "../../../images/product_9.png";
import Product10 from "../../../images/product_10.png";

class ProductCategoryPage extends Component {
  render() {
    return (
      <div>
        <div class="fs_menu_overlay" />

        <div class="hamburger_menu">
          <div class="hamburger_close">
            <i class="fa fa-times" aria-hidden="true" />
          </div>
          <div class="hamburger_menu_content text-right">
            <ul class="menu_top_nav">
              <li class="menu_item has-children">
                <a>
                  usd
                  <i class="fa fa-angle-down" />
                </a>
                <ul class="menu_selection">
                  <li>
                    <a>cad</a>
                  </li>
                  <li>
                    <a>aud</a>
                  </li>
                  <li>
                    <a>eur</a>
                  </li>
                  <li>
                    <a>gbp</a>
                  </li>
                </ul>
              </li>
              <li class="menu_item has-children">
                <a>
                  English
                  <i class="fa fa-angle-down" />
                </a>
                <ul class="menu_selection">
                  <li>
                    <a>French</a>
                  </li>
                  <li>
                    <a>Italian</a>
                  </li>
                  <li>
                    <a>German</a>
                  </li>
                  <li>
                    <a>Spanish</a>
                  </li>
                </ul>
              </li>
              <li class="menu_item has-children">
                <a>
                  My Account
                  <i class="fa fa-angle-down" />
                </a>
                <ul class="menu_selection">
                  <li>
                    <a>
                      <i class="fa fa-sign-in" aria-hidden="true" />
                      Sign In
                    </a>
                  </li>
                  <li>
                    <a>
                      <i class="fa fa-user-plus" aria-hidden="true" />
                      Register
                    </a>
                  </li>
                </ul>
              </li>
              <li class="menu_item">
                <a>home</a>
              </li>
              <li class="menu_item">
                <a href="categories.html">shop</a>
              </li>
              <li class="menu_item">
                <a>promotion</a>
              </li>
              <li class="menu_item">
                <a>pages</a>
              </li>
              <li class="menu_item">
                <a href="https://nordiccoder.com/blog" target="blank">
                  blog
                </a>
              </li>
              <li class="menu_item">
                <a>contact</a>
              </li>
            </ul>
          </div>
        </div>

        <div class="container product_section_container">
          <div class="row">
            <div class="col product_section clearfix">
              <PageNavigationBar />
              <div class="sidebar">
                <CategoryNameListing />

                <FilterByPrice />
              </div>

              <div class="main_content">
                <div class="products_iso">
                  <div class="row">
                    <div class="col">
                      <div class="product_sorting_container product_sorting_container_top">
                        <ul class="product_sorting">
                          <SortingDropdown />
                          <PerPage />
                        </ul>
                        <div class="pages d-flex flex-row align-items-center">
                          <div class="page_current">
                            <span>1</span>
                            <ul class="page_selection">
                              <li>
                                <a>1</a>
                              </li>
                              <li>
                                <a>2</a>
                              </li>
                              <li>
                                <a>3</a>
                              </li>
                            </ul>
                          </div>
                          <div class="page_total">
                            <span>of</span> 3
                          </div>
                          <div id="next_page" class="page_next">
                            <a>
                              <i
                                class="fa fa-long-arrow-right"
                                aria-hidden="true"
                              />
                            </a>
                          </div>
                        </div>
                      </div>

                      <div class="product-grid">
                        <div class="product-item men">
                          <div class="product discount product_filter">
                            <div class="product_image">
                              <img src={Product1} alt="" />
                            </div>
                            <div class="favorite favorite_left" />
                            <div class="product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center">
                              <span>-$20</span>
                            </div>
                            <div class="product_info">
                              <h6 class="product_name">
                                <a href="single.html">
                                  Fujifilm X100T 16 MP Digital Camera (Silver)
                                </a>
                              </h6>
                              <div class="product_price">
                                $520.00
                                <span>$590.00</span>
                              </div>
                            </div>
                          </div>
                          <div class="red_button add_to_cart_button">
                            <a>add to cart</a>
                          </div>
                        </div>

                        <div class="product-item women">
                          <div class="product product_filter">
                            <div class="product_image">
                              <img src={Product2} alt="" />
                            </div>
                            <div class="favorite" />
                            <div class="product_bubble product_bubble_left product_bubble_green d-flex flex-column align-items-center">
                              <span>new</span>
                            </div>
                            <div class="product_info">
                              <h6 class="product_name">
                                <a href="single.html">
                                  Samsung CF591 Series Curved 27-Inch FHD
                                  Monitor
                                </a>
                              </h6>
                              <div class="product_price">$610.00</div>
                            </div>
                          </div>
                          <div class="red_button add_to_cart_button">
                            <a>add to cart</a>
                          </div>
                        </div>

                        <div class="product-item women">
                          <div class="product product_filter">
                            <div class="product_image">
                              <img src={Product3} alt="" />
                            </div>
                            <div class="favorite" />
                            <div class="product_info">
                              <h6 class="product_name">
                                <a href="single.html">
                                  Blue Yeti USB Microphone Blackout Edition
                                </a>
                              </h6>
                              <div class="product_price">$120.00</div>
                            </div>
                          </div>
                          <div class="red_button add_to_cart_button">
                            <a>add to cart</a>
                          </div>
                        </div>

                        <div class="product-item accessories">
                          <div class="product product_filter">
                            <div class="product_image">
                              <img src={Product4} alt="" />
                            </div>
                            <div class="product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center">
                              <span>sale</span>
                            </div>
                            <div class="favorite favorite_left" />
                            <div class="product_info">
                              <h6 class="product_name">
                                <a href="single.html">
                                  DYMO LabelWriter 450 Turbo Thermal Label
                                  Printer
                                </a>
                              </h6>
                              <div class="product_price">$410.00</div>
                            </div>
                          </div>
                          <div class="red_button add_to_cart_button">
                            <a>add to cart</a>
                          </div>
                        </div>

                        <div class="product-item women men">
                          <div class="product product_filter">
                            <div class="product_image">
                              <img src="images/product_5.png" alt="" />
                            </div>
                            <div class="favorite" />
                            <div class="product_info">
                              <h6 class="product_name">
                                <a href="single.html">
                                  Pryma Headphones, Rose Gold & Grey
                                </a>
                              </h6>
                              <div class="product_price">$180.00</div>
                            </div>
                          </div>
                          <div class="red_button add_to_cart_button">
                            <a>add to cart</a>
                          </div>
                        </div>

                        <div class="product-item accessories">
                          <div class="product discount product_filter">
                            <div class="product_image">
                              <img src={Product6} alt="" />
                            </div>
                            <div class="favorite favorite_left" />
                            <div class="product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center">
                              <span>-$20</span>
                            </div>
                            <div class="product_info">
                              <h6 class="product_name">
                                <a href="single.html">
                                  Fujifilm X100T 16 MP Digital Camera (Silver)
                                </a>
                              </h6>
                              <div class="product_price">
                                $520.00
                                <span>$590.00</span>
                              </div>
                            </div>
                          </div>
                          <div class="red_button add_to_cart_button">
                            <a>add to cart</a>
                          </div>
                        </div>

                        <div class="product-item women">
                          <div class="product product_filter">
                            <div class="product_image">
                              <img src={Product7} alt="" />
                            </div>
                            <div class="favorite" />
                            <div class="product_info">
                              <h6 class="product_name">
                                <a href="single.html">
                                  Samsung CF591 Series Curved 27-Inch FHD
                                  Monitor
                                </a>
                              </h6>
                              <div class="product_price">$610.00</div>
                            </div>
                          </div>
                          <div class="red_button add_to_cart_button">
                            <a>add to cart</a>
                          </div>
                        </div>

                        <div class="product-item accessories">
                          <div class="product product_filter">
                            <div class="product_image">
                              <img src={Product8} alt="" />
                            </div>
                            <div class="favorite" />
                            <div class="product_info">
                              <h6 class="product_name">
                                <a href="single.html">
                                  Blue Yeti USB Microphone Blackout Edition
                                </a>
                              </h6>
                              <div class="product_price">$120.00</div>
                            </div>
                          </div>
                          <div class="red_button add_to_cart_button">
                            <a>add to cart</a>
                          </div>
                        </div>

                        <div class="product-item men">
                          <div class="product product_filter">
                            <div class="product_image">
                              <img src={Product9} alt="" />
                            </div>
                            <div class="product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center">
                              <span>sale</span>
                            </div>
                            <div class="favorite favorite_left" />
                            <div class="product_info">
                              <h6 class="product_name">
                                <a href="single.html">
                                  DYMO LabelWriter 450 Turbo Thermal Label
                                  Printer
                                </a>
                              </h6>
                              <div class="product_price">$410.00</div>
                            </div>
                          </div>
                          <div class="red_button add_to_cart_button">
                            <a>add to cart</a>
                          </div>
                        </div>

                        <div class="product-item men">
                          <div class="product product_filter">
                            <div class="product_image">
                              <img src={Product10} alt="" />
                            </div>
                            <div class="favorite" />
                            <div class="product_info">
                              <h6 class="product_name">
                                <a href="single.html">
                                  Pryma Headphones, Rose Gold & Grey
                                </a>
                              </h6>
                              <div class="product_price">$180.00</div>
                            </div>
                          </div>
                          <div class="red_button add_to_cart_button">
                            <a>add to cart</a>
                          </div>
                        </div>

                        <div class="product-item women men">
                          <div class="product product_filter">
                            <div class="product_image">
                              <img src={Product5} alt="" />
                            </div>
                            <div class="favorite" />
                            <div class="product_info">
                              <h6 class="product_name">
                                <a href="single.html">
                                  Pryma Headphones, Rose Gold & Grey
                                </a>
                              </h6>
                              <div class="product_price">$180.00</div>
                            </div>
                          </div>
                          <div class="red_button add_to_cart_button">
                            <a>add to cart</a>
                          </div>
                        </div>

                        <div class="product-item accessories">
                          <div class="product discount product_filter">
                            <div class="product_image">
                              <img src="images/product_6.png" alt="" />
                            </div>
                            <div class="favorite favorite_left" />
                            <div class="product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center">
                              <span>-$20</span>
                            </div>
                            <div class="product_info">
                              <h6 class="product_name">
                                <a href="single.html">
                                  Fujifilm X100T 16 MP Digital Camera (Silver)
                                </a>
                              </h6>
                              <div class="product_price">
                                $520.00
                                <span>$590.00</span>
                              </div>
                            </div>
                          </div>
                          <div class="red_button add_to_cart_button">
                            <a>add to cart</a>
                          </div>
                        </div>
                      </div>

                      <div class="product_sorting_container product_sorting_container_bottom clearfix">
                        <ul class="product_sorting">
                          <li>
                            <span>Show:</span>
                            <span class="num_sorting_text">04</span>
                            <i class="fa fa-angle-down" />
                            <ul class="sorting_num">
                              <li class="num_sorting_btn">
                                <span>01</span>
                              </li>
                              <li class="num_sorting_btn">
                                <span>02</span>
                              </li>
                              <li class="num_sorting_btn">
                                <span>03</span>
                              </li>
                              <li class="num_sorting_btn">
                                <span>04</span>
                              </li>
                            </ul>
                          </li>
                        </ul>
                        <span class="showing_results">
                          Showing 1–3 of 12 results
                        </span>
                        <div class="pages d-flex flex-row align-items-center">
                          <div class="page_current">
                            <span>1</span>
                            <ul class="page_selection">
                              <li>
                                <a>1</a>
                              </li>
                              <li>
                                <a>2</a>
                              </li>
                              <li>
                                <a>3</a>
                              </li>
                            </ul>
                          </div>
                          <div class="page_total">
                            <span>of</span> 3
                          </div>
                          <div id="next_page_1" class="page_next">
                            <a>
                              <i
                                class="fa fa-long-arrow-right"
                                aria-hidden="true"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="benefit">
          <div class="container">
            <div class="row benefit_row">
              <div class="col-lg-3 benefit_col">
                <div class="benefit_item d-flex flex-row align-items-center">
                  <div class="benefit_icon">
                    <i class="fa fa-truck" aria-hidden="true" />
                  </div>
                  <div class="benefit_content">
                    <h6>free shipping</h6>
                    <p>Suffered Alteration in Some Form</p>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 benefit_col">
                <div class="benefit_item d-flex flex-row align-items-center">
                  <div class="benefit_icon">
                    <i class="fa fa-money" aria-hidden="true" />
                  </div>
                  <div class="benefit_content">
                    <h6>cach on delivery</h6>
                    <p>The Internet Tend To Repeat</p>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 benefit_col">
                <div class="benefit_item d-flex flex-row align-items-center">
                  <div class="benefit_icon">
                    <i class="fa fa-undo" aria-hidden="true" />
                  </div>
                  <div class="benefit_content">
                    <h6>45 days return</h6>
                    <p>Making it Look Like Readable</p>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 benefit_col">
                <div class="benefit_item d-flex flex-row align-items-center">
                  <div class="benefit_icon">
                    <i class="fa fa-clock-o" aria-hidden="true" />
                  </div>
                  <div class="benefit_content">
                    <h6>opening all week</h6>
                    <p>8AM - 09PM</p>
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

export default ProductCategoryPage;
