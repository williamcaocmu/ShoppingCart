import React, { Component } from "react";
import CategoryNameListing from "./CategoryNameListing";
import PageNavigationBar from "./PageNavigationBar";
import PerPage from "./PerPage";
import SortingDropdown from "./SortingDropdown";
import FilterByPrice from "./FilterByPrice";
import ProductGrid from "./ProductGrid";
import Pagination from "./Pagination";

import { connect } from "react-redux";
import { getCategories, getProdcuts } from "../productCategoryActions";
import ShowResult from "./ShowResult";

class ProductCategoryPage extends Component {
  componentDidMount() {
    this.props.getCategories();
    this.props.getProdcuts();
  }

  render() {
    const categories = this.props;
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
                <a>
                  usd
                  <i className="fa fa-angle-down" />
                </a>
                <ul className="menu_selection">
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
              <li className="menu_item has-children">
                <a>
                  English
                  <i className="fa fa-angle-down" />
                </a>
                <ul className="menu_selection">
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
              <li className="menu_item has-children">
                <a>
                  My Account
                  <i className="fa fa-angle-down" />
                </a>
                <ul className="menu_selection">
                  <li>
                    <a>
                      <i className="fa fa-sign-in" aria-hidden="true" />
                      Sign In
                    </a>
                  </li>
                  <li>
                    <a>
                      <i className="fa fa-user-plus" aria-hidden="true" />
                      Register
                    </a>
                  </li>
                </ul>
              </li>
              <li className="menu_item">
                <a>home</a>
              </li>
              <li className="menu_item">
                <a href="categories.html">shop</a>
              </li>
              <li className="menu_item">
                <a>promotion</a>
              </li>
              <li className="menu_item">
                <a>pages</a>
              </li>
              <li className="menu_item">
                <a href="https://nordiccoder.com/blog" target="blank">
                  blog
                </a>
              </li>
              <li className="menu_item">
                <a>contact</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="container product_section_container">
          <div className="row">
            <div className="col product_section clearfix">
              <PageNavigationBar />
              <div className="sidebar">
                <CategoryNameListing categories={categories} />
                <FilterByPrice />
              </div>

              <div className="main_content">
                <div className="products_iso">
                  <div className="row">
                    <div className="col">
                      <div className="product_sorting_container product_sorting_container_top">
                        <ul className="product_sorting">
                          <SortingDropdown />
                          <PerPage />
                        </ul>
                        <Pagination />
                      </div>

                      <ProductGrid products={this.props.products} />

                      {this.props.products.length > 0 && <ShowResult />}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="benefit">
          <div className="container">
            <div className="row benefit_row">
              <div className="col-lg-3 benefit_col">
                <div className="benefit_item d-flex flex-row align-items-center">
                  <div className="benefit_icon">
                    <i className="fa fa-truck" aria-hidden="true" />
                  </div>
                  <div className="benefit_content">
                    <h6>free shipping</h6>
                    <p>Suffered Alteration in Some Form</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 benefit_col">
                <div className="benefit_item d-flex flex-row align-items-center">
                  <div className="benefit_icon">
                    <i className="fa fa-money" aria-hidden="true" />
                  </div>
                  <div className="benefit_content">
                    <h6>cach on delivery</h6>
                    <p>The Internet Tend To Repeat</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 benefit_col">
                <div className="benefit_item d-flex flex-row align-items-center">
                  <div className="benefit_icon">
                    <i className="fa fa-undo" aria-hidden="true" />
                  </div>
                  <div className="benefit_content">
                    <h6>45 days return</h6>
                    <p>Making it Look Like Readable</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 benefit_col">
                <div className="benefit_item d-flex flex-row align-items-center">
                  <div className="benefit_icon">
                    <i className="fa fa-clock-o" aria-hidden="true" />
                  </div>
                  <div className="benefit_content">
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

const mapStateToProps = state => {
  console.log(state);
  return {
    categories: state.category.categories,
    products: state.category.products
  };
};

export default connect(
  mapStateToProps,
  { getCategories, getProdcuts }
)(ProductCategoryPage);
