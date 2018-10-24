import React, { Component } from "react";
import { connect } from "react-redux";
import { getProdcuts } from "../productCategoryActions";

const arrNum = [6, 12, 24];

class PerPage extends Component {
  state = {
    selectedNum: null
  };

  renderList = list =>
    list.length > 0
      ? list.map(item => (
          <li
            onClick={() => {
              this.setState(
                {
                  selectedNum: item
                },
                () => {
                  const options = { limit: this.state.selectedNum };
                  this.props.getProdcuts(options);
                }
              );
            }}
            key={item}
            className="num_sorting_btn"
          >
            <span> {item} </span>
          </li>
        ))
      : null;

  render() {
    return (
      <li>
        <span> Show </span>
        <span className="num_sorting_text">
          {" "}
          {this.state.selectedNum}{" "}
        </span>{" "}
        <i className="fa fa-angle-down" />
        <ul className="sorting_num">{this.renderList(arrNum)}</ul>
      </li>
    );
  }
}

const mapStateToProps = state => {
  return { products: state.category.products };
};

export default connect(
  mapStateToProps,
  { getProdcuts }
)(PerPage);
