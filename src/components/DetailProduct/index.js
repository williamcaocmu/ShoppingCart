import React, { Component } from "react";
import Desc1 from "../../images/desc_1.jpg";
import Desc2 from "../../images/desc_2.jpg";
import Desc3 from "../../images/desc_3.jpg";
import QuantitySelection from "./QuantitySelection";
import AddToCart from "./AddToCart";
import PreviewThumbnail from "./PreviewThumbnail";
import PreviewViewer from "./PreviewViewer";
import ProductDescription from "./ProductDescription";
import { connect } from "react-redux";
import { getProductById } from "./DetailProductAction";
import __isEmpty from "lodash/isEmpty";
import _get from "lodash/get";

class DetailProduct extends Component {
  state = {
    selectedPicture: null,
    quantity: 1,
    price: 495.0,
    totalPrice: () => {
      return this.state.quantity * this.state.price;
    }
  };

  handleSelect = picture => {
    this.setState({ selectedPicture: picture }, () => {
      console.log(picture);
    });
  };

  getSelectedImage() {
    if (this.state.selectedPicture) {
      return this.state.selectedPicture;
    }
    return _get(this.props, "product.images.0", "");
  }

  add = () => {
    this.setState({ quantity: ++this.state.quantity });
  };

  minus = () => {
    if (this.state.quantity >= 2) {
      this.setState({ quantity: --this.state.quantity });
    }
  };

  componentDidMount() {
    this.props.getProductById(this.props.match.params.id);
  }

  render() {
    const { product } = this.props;

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
        <div className="container single_product_container">
          <div className="row">
            <div className="col">
              {/* Breadcrumbs */}
              <div className="breadcrumbs d-flex flex-row align-items-center">
                <ul>
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>
                    <a href="categories.html">
                      <i className="fa fa-angle-right" aria-hidden="true" />
                      Men's
                    </a>
                  </li>
                  <li className="active">
                    <a>
                      <i className="fa fa-angle-right" aria-hidden="true" />
                      Single Product
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-7">
              <div className="single_product_pics">
                <div className="row">
                  <div className="col-lg-3 thumbnails_col order-lg-1 order-2">
                    {!__isEmpty(product) && (
                      <PreviewThumbnail
                        product={product}
                        onSelect={this.handleSelect}
                        selectedPicture={this.getSelectedImage()}
                      />
                    )}
                  </div>
                  <div className="col-lg-9 image_col order-lg-2 order-1">
                    <PreviewViewer selectedPicture={this.getSelectedImage()} />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="product_details">
                {!__isEmpty(product) && (
                  <ProductDescription
                    product={product}
                    totalPrice={this.state.totalPrice}
                  />
                )}
                <div className="quantity d-flex flex-column flex-sm-row align-items-sm-center">
                  <QuantitySelection
                    minus={this.minus}
                    add={this.add}
                    quantity={this.state.quantity}
                  />
                  <AddToCart />
                  <div className="product_favorite d-flex flex-column align-items-center justify-content-center" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tabs_section_container">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="tabs_container">
                  <ul className="tabs d-flex flex-sm-row flex-column align-items-left align-items-md-center justify-content-center">
                    <li className="tab active" data-active-tab="tab_1">
                      <span>Description</span>
                    </li>
                    <li className="tab" data-active-tab="tab_2">
                      <span>Additional Information</span>
                    </li>
                    <li className="tab" data-active-tab="tab_3">
                      <span>Reviews (2)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                {/* Tab Description */}
                <div id="tab_1" className="tab_container active">
                  <div className="row">
                    <div className="col-lg-5 desc_col">
                      <div className="tab_title">
                        <h4>Description</h4>
                      </div>
                      <div className="tab_text_block">
                        <h2>Pocket cotton sweatshirt</h2>
                        <p>
                          Nam tempus turpis at metus scelerisque placerat nulla
                          deumantos solicitud felis. Pellentesque diam dolor,
                          elementum etos lobortis des mollis ut...
                        </p>
                      </div>
                      <div className="tab_image">
                        <img src={Desc1} alt="true" />
                      </div>
                      <div className="tab_text_block">
                        <h2>Pocket cotton sweatshirt</h2>
                        <p>
                          Nam tempus turpis at metus scelerisque placerat nulla
                          deumantos solicitud felis. Pellentesque diam dolor,
                          elementum etos lobortis des mollis ut...
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-5 offset-lg-2 desc_col">
                      <div className="tab_image">
                        <img src={Desc2} alt="true" />
                      </div>
                      <div className="tab_text_block">
                        <h2>Pocket cotton sweatshirt</h2>
                        <p>
                          Nam tempus turpis at metus scelerisque placerat nulla
                          deumantos solicitud felis. Pellentesque diam dolor,
                          elementum etos lobortis des mollis ut...
                        </p>
                      </div>
                      <div className="tab_image desc_last">
                        <img src={Desc3} alt="true" />
                      </div>
                    </div>
                  </div>
                </div>
                {/* Tab Additional Info */}
                <div id="tab_2" className="tab_container">
                  <div className="row">
                    <div className="col additional_info_col">
                      <div className="tab_title additional_info_title">
                        <h4>Additional Information</h4>
                      </div>
                      <p>
                        COLOR:
                        <span>Gold, Red</span>
                      </p>
                      <p>
                        SIZE:
                        <span>L,M,XL</span>
                      </p>
                    </div>
                  </div>
                </div>
                {/* Tab Reviews */}
                <div id="tab_3" className="tab_container">
                  <div className="row">
                    {/* User Reviews */}
                    <div className="col-lg-6 reviews_col">
                      <div className="tab_title reviews_title">
                        <h4>Reviews (2)</h4>
                      </div>
                      {/* User Review */}
                      <div className="user_review_container d-flex flex-column flex-sm-row">
                        <div className="user">
                          <div className="user_pic" />
                          <div className="user_rating">
                            <ul className="star_rating">
                              <li>
                                <i className="fa fa-star" aria-hidden="true" />
                              </li>
                              <li>
                                <i className="fa fa-star" aria-hidden="true" />
                              </li>
                              <li>
                                <i className="fa fa-star" aria-hidden="true" />
                              </li>
                              <li>
                                <i className="fa fa-star" aria-hidden="true" />
                              </li>
                              <li>
                                <i
                                  className="fa fa-star-o"
                                  aria-hidden="true"
                                />
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="review">
                          <div className="review_date">27 Aug 2016</div>
                          <div className="user_name">Brandon William</div>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                          </p>
                        </div>
                      </div>
                      {/* User Review */}
                      <div className="user_review_container d-flex flex-column flex-sm-row">
                        <div className="user">
                          <div className="user_pic" />
                          <div className="user_rating">
                            <ul className="star_rating">
                              <li>
                                <i className="fa fa-star" aria-hidden="true" />
                              </li>
                              <li>
                                <i className="fa fa-star" aria-hidden="true" />
                              </li>
                              <li>
                                <i className="fa fa-star" aria-hidden="true" />
                              </li>
                              <li>
                                <i className="fa fa-star" aria-hidden="true" />
                              </li>
                              <li>
                                <i
                                  className="fa fa-star-o"
                                  aria-hidden="true"
                                />
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="review">
                          <div className="review_date">27 Aug 2016</div>
                          <div className="user_name">Brandon William</div>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* Add Review */}
                    <div className="col-lg-6 add_review_col">
                      <div className="add_review">
                        <form id="review_form" action="post">
                          <div>
                            <h1>Add Review</h1>
                            <input
                              id="review_name"
                              className="form_input input_name"
                              type="text"
                              name="name"
                              placeholder="Name*"
                              required="required"
                              data-error="Name is required."
                            />
                            <input
                              id="review_email"
                              className="form_input input_email"
                              type="email"
                              name="email"
                              placeholder="Email*"
                              required="required"
                              data-error="Valid email is required."
                            />
                          </div>
                          <div>
                            <h1>Your Rating:</h1>
                            <ul className="user_star_rating">
                              <li>
                                <i className="fa fa-star" aria-hidden="true" />
                              </li>
                              <li>
                                <i className="fa fa-star" aria-hidden="true" />
                              </li>
                              <li>
                                <i className="fa fa-star" aria-hidden="true" />
                              </li>
                              <li>
                                <i className="fa fa-star" aria-hidden="true" />
                              </li>
                              <li>
                                <i
                                  className="fa fa-star-o"
                                  aria-hidden="true"
                                />
                              </li>
                            </ul>
                            <textarea
                              id="review_message"
                              className="input_review"
                              name="message"
                              placeholder="Your Review"
                              rows={4}
                              required
                              data-error="Please, leave us a review."
                              defaultValue={""}
                            />
                          </div>
                          <div className="text-left text-sm-right">
                            <button
                              id="review_submit"
                              type="submit"
                              className="red_button review_submit_btn trans_300"
                              value="Submit"
                            >
                              submit
                            </button>
                          </div>
                        </form>
                      </div>
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
                    <p>Suffered alt="true"eration in Some Form</p>
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

const mapStateToProps = (state, ownProps) => {
  return {
    product: state.selectedProduct.product
  };
};

// DetailProduct.propTypes = {
//   product: PropTypes.object.isRequired
// };

export default connect(
  mapStateToProps,
  { getProductById }
)(DetailProduct);
