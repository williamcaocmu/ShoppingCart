import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getCategories,
  getProductsByCategory
} from "../../Week4/components/productCategoryActions";

import ProductCard from "./ProductCard";
import Categories from "./Categories";
import "./style.css";

export class NewArrivalBlock extends Component {
  state = {
    category: null
  };

  // filterAll = () => {
  //   const newData = [...data];
  //   this.setState({ products: newData, itemActive: "all" });
  // };
  // filterWomen = () => {
  //   let newProducts = data.filter(
  //     product => product.class.split(" ").includes("women") === true
  //   );
  //   this.setState({ products: newProducts, itemActive: "women" });
  // };
  // filterMen = () => {
  //   let newProducts = data.filter(
  //     product => product.class.split(" ").includes("men") === true
  //   );
  //   this.setState({ products: newProducts, itemActive: "men" });
  // };
  // filterAccessories = () => {
  //   let newProducts = data.filter(
  //     product => product.class.split(" ").includes("accessories") === true
  //   );
  //   this.setState({ products: newProducts, itemActive: "acc" });
  // };

  componentDidMount() {
    this.props.getCategories();
  }

  onHandleCategories = category => {
    this.props.getProductsByCategory(category);
    this.setState(
      {
        category
      },
      () => console.log(this.state.category)
    );
  };

  render() {
    let { categories, products } = this.props;
    return (
      <div>
        <div className="new_arrivals">
          <div className="container">
            <div className="row">
              <div className="col text-center">
                <div className="section_title new_arrivals_title">
                  <h2>New Arrivals</h2>
                </div>
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col text-center">
                <Categories
                  categories={categories}
                  onHandleCategories={this.onHandleCategories}
                  selectedCategory={this.state.category}
                />
              </div>
            </div>
            <div className="row justify-content-between">
              {products.length > 0 ? (
                products.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))
              ) : (
                <div
                  style={{ marginTop: "30px" }}
                  className="row justify-content-center"
                >
                  <h3> Chưa Chọn Loại Sản Phẩm. Vui Lòng Chọn Loại</h3>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state.category);
  return {
    products: state.category.products,
    categories: state.category
  };
};

export default connect(
  mapStateToProps,
  { getCategories, getProductsByCategory }
)(NewArrivalBlock);
