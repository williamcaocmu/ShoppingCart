import React, { Component } from "react";
import { connect } from "react-redux";
import { getProdcuts } from "../productCategoryActions";

export class Pagination extends Component {
  state = {
    currentPage: 1
  };

  renderTotalPage = totalPage => {
    if (typeof totalPage === "number" && totalPage != "NaN") {
      return totalPage;
    }
    return null;
  };

  nextPage = (current, totalPage, pagination) => {
    const tmp = current;
    current = current + 1;
    console.log(current);
    if (tmp < totalPage) {
      this.setState(
        {
          currentPage: current
        },
        () => {
          let { limit } = pagination;
          const option = { limit: "", skip: "" };

          option.limit = limit;
          option.skip = (current - 1) * limit;
          this.props.getProdcuts(option);
          console.log(this.props);
        }
      );
    }
  };

  componentDidMount() {
    this.setState({
      current: 1
    });
  }

  render() {
    const { total, limit } = this.props.pagination;
    const totalPage = +(Math.floor(total / limit) + 1);

    return (
      <div className="pages d-flex flex-row align-items-center">
        <div className="page_current">
          <span>{this.state.currentPage}</span>
          <ul className="page_selection" />
        </div>
        <div className="page_total">
          <span>of</span> {this.renderTotalPage(totalPage)}
        </div>
        <div
          onClick={() =>
            this.nextPage(
              this.state.currentPage,
              totalPage,
              this.props.pagination
            )
          }
          id="next_page"
          className="page_next"
        >
          <a>
            <i className="fa fa-long-arrow-right" aria-hidden="true" />
          </a>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    pagination: state.category.pagination
  };
};

export default connect(
  mapStateToProps,
  { getProdcuts }
)(Pagination);
