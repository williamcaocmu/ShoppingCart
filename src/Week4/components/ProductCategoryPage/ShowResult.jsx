import React, { Component } from "react";
import { connect } from "react-redux";
import { getProdcuts } from "../productCategoryActions";

class ShowResult extends Component {
  // Array.from(Array(numberPage).keys())

  state = {
    currentPage: 1
  };

  setPage = (i, products) => {
    this.setState(
      {
        currentPage: i
      },
      () => {
        let option = {};
        option.limit = products.limit;
        option.skip = (this.state.currentPage - 1) * products.limit;
        this.props.getProdcuts(option);
      }
    );
  };

  renderPage = (numberPage, products) => {
    if (numberPage > 0) {
      const newArr = Array.from(Array(numberPage).keys());
      return newArr.map(i => (
        <li
          onClick={() => this.setPage(i + 1, products)}
          key={i}
          className="num_sorting_btn"
        >
          <span> {i + 1} </span>
        </li>
      ));
    }
    return null;
  };
  render() {
    let { products } = this.props;
    let totalPage = +(Math.floor(products.total / products.limit) + 1);

    return (
      <div className="product_sorting_container product_sorting_container_bottom clearfix">
        <ul className="product_sorting">
          <li>
            <span> Show: </span>{" "}
            <span className="num_sorting_text">{this.state.currentPage}</span>
            <i className="fa fa-angle-down" />
            <ul className="sorting_num">
              {this.renderPage(totalPage, products)}
            </ul>{" "}
          </li>{" "}
        </ul>{" "}
        <span className="showing_results">
          Showing {products ? products.skip + 1 : "Loading..."} –
          {products
            ? products.skip + products.limit + 1 > products.total
              ? products.total
              : products.skip + products.limit + 1
            : "Loading ..."}{" "}
          of {products ? products.total : "Loading ..."} results
        </span>{" "}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { products: state.category.pagination };
};

export default connect(
  mapStateToProps,
  { getProdcuts }
)(ShowResult);
