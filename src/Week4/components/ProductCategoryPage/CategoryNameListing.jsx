import React, { Component } from "react";
import { connect } from "react-redux";
import { getProductsByCategory } from "../productCategoryActions";

class CategoryNameListing extends Component {
  state = {
    selectedItem: ""
  };

  renderList = categories =>
    categories.length > 0
      ? categories.map((item, i) => (
          <li
            style={{
              cursor: "pointer"
            }}
            className={item.id === this.state.selectedItem ? `active` : null}
            key={item.id}
            onClick={() => {
              this.setState({ selectedItem: item.id }, () => {
                this.props.getProductsByCategory(this.state.selectedItem);
              });
            }}
          >
            {item.id === this.state.selectedItem ? (
              <span>
                <i className="fa fa-angle-double-right" aria-hidden="true" />
              </span>
            ) : null}
            <a>{this.titleCase(item.name)}</a>
          </li>
        ))
      : null;

  titleCase = str => {
    var splitStr = str.toLowerCase().split(" ");
    for (var i = 0; i < splitStr.length; i++) {
      splitStr[i] =
        splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }

    return splitStr.join(" ");
  };

  render() {
    const {
      categories: { categories }
    } = this.props;

    return (
      <div className="sidebar_section">
        <div className="sidebar_title">
          <h5>Product Category</h5>
        </div>
        <ul className="sidebar_categories">{this.renderList(categories)}</ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  // console.log(state);
  return {};
};

export default connect(
  mapStateToProps,
  { getProductsByCategory }
)(CategoryNameListing);
