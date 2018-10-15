import React, { Component } from "react";
import product1 from "../../images/product_1.png";
import product2 from "../../images/product_2.png";
import product3 from "../../images/product_3.png";
import product4 from "../../images/product_4.png";
import product5 from "../../images/product_5.png";
import product6 from "../../images/product_6.png";
import product7 from "../../images/product_7.png";
import product8 from "../../images/product_8.png";
import product9 from "../../images/product_9.png";
import product10 from "../../images/product_10.png";
import ProductCard from "./ProductCard";
import "./style.css";

const data = [
  {
    src: product1,
    description: "Fujifilm X100T 16 MP Digital Camera (Silver)",
    price: "590.00",
    clearPrice: "520.00",
    class: "men"
  },
  {
    src: product2,
    description: "Samsung CF591 Series Curved 27-Inch FHD Monitor",
    price: "120.00",
    clearPrice: "",
    class: "women"
  },
  {
    src: product3,
    description: "Blue Yeti USB Microphone Blackout Edition",
    price: "120.00",
    clearPrice: "",
    class: "women"
  },
  {
    src: product4,
    description: "DYMO LabelWriter 450 Turbo Thermal Label Printer",
    price: "410.00",
    clearPrice: "",
    class: "accessories"
  },
  {
    src: product5,
    description: "Pryma Headphones, Rose Gold & Grey",
    price: "180.00",
    clearPrice: "",
    class: "men women"
  },
  {
    src: product6,
    description: "Fujifilm X100T 16 MP Digital Camera (Silver)",
    price: "520.00 ",
    clearPrice: "590.00",
    class: "accessories"
  },
  {
    src: product7,
    description: "Samsung CF591 Series Curved 27-Inch FHD Monitor",
    price: "610.00",
    clearPrice: "",
    class: "women"
  },
  {
    src: product8,
    description: "Blue Yeti USB Microphone Blackout Edition",
    price: "120.00",
    clearPrice: "",
    class: "accessories"
  },
  {
    src: product9,
    description: "DYMO LabelWriter 450 Turbo Thermal Label Printer",
    price: "410.00",
    clearPrice: "",
    class: "men"
  },
  {
    src: product10,
    description: "Pryma Headphones, Rose Gold & Grey",
    price: "180.00",
    clearPrice: "",
    class: "men"
  }
];

export class NewArrivalBlock extends Component {
  state = { products: data, itemActive: "all" };

  filterAll = () => {
    const newData = [...data];
    this.setState({ products: newData, itemActive: "all" });
  };
  filterWomen = () => {
    let newProducts = data.filter(
      product => product.class.split(" ").includes("women") === true
    );
    this.setState({ products: newProducts, itemActive: "women" });
  };
  filterMen = () => {
    let newProducts = data.filter(
      product => product.class.split(" ").includes("men") === true
    );
    this.setState({ products: newProducts, itemActive: "men" });
  };
  filterAccessories = () => {
    let newProducts = data.filter(
      product => product.class.split(" ").includes("accessories") === true
    );
    this.setState({ products: newProducts, itemActive: "acc" });
  };

  render() {
    console.log(this.state.itemActive);
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
                <div className="new_arrivals_sorting">
                  <ul className="arrivals_grid_sorting clearfix button-group ">
                    <li
                      onClick={this.filterAll}
                      className={`grid_sorting_button button d-flex flex-column justify-content-center align-items-center is-checked ${
                        this.state.itemActive === "all" ? "active" : ""
                      }`}
                    >
                      all
                    </li>
                    <li
                      onClick={this.filterWomen}
                      className={`grid_sorting_button button d-flex flex-column justify-content-center align-items-center is-checked ${
                        this.state.itemActive === "women" ? "active" : ""
                      }`}
                    >
                      women's
                    </li>
                    <li
                      onClick={this.filterAccessories}
                      className={`grid_sorting_button button d-flex flex-column justify-content-center align-items-center ${
                        this.state.itemActive === "acc" ? "active" : ""
                      } `}
                    >
                      accessories
                    </li>
                    <li
                      onClick={this.filterMen}
                      className={`grid_sorting_button button d-flex flex-column justify-content-center align-items-center ${
                        this.state.itemActive === "men" ? "active" : ""
                      }`}
                    >
                      men's
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div
                  className="product-grid flex-container"
                  data-isotope="{ &quot;itemSelector&quot;: &quot;.product-item&quot;, &quot;layoutMode&quot;: &quot;fitRows&quot; }"
                >
                  {this.state.products.map((product, i) => (
                    <ProductCard
                      key={i}
                      description={product.description}
                      src={product.src}
                      price={product.price}
                      clearPrice={product.clearPrice}
                      class={this.props.class}
                    />
                  ))}
                  {/* <div className="product-item men">
                    <div className="product discount product_filter">
                      <Thumbnail src={product1} />
                      <div className="favorite favorite_left" />
                      <Status />
                      <ShortDescription
                        description={`Fujifilm X100T 16 MP Digital Camera (Silver)`}
                        price={`$590.00`}
                        clearPrice={`$520.00`}
                      />
                    </div>
                    <AddToCartButton />
                  </div>

                  <div className="product-item women">
                    <div className="product product_filter">
                      <div className="product_image">
                        <img src={product2} alt="" />
                      </div>
                      <div className="favorite" />
                      <div className="product_bubble product_bubble_left product_bubble_green d-flex flex-column align-items-center">
                        <span>new</span>
                      </div>

                      <ShortDescription
                        description={`Samsung CF591 Series Curved 27-Inch FHD Monitor`}
                        price={`$610.00`}
                      />
                    </div>
                    <AddToCartButton />
                  </div>

                  <div className="product-item women">
                    <div className="product product_filter">
                      <div className="product_image">
                        <img src={product3} alt="" />
                      </div>
                      <div className="favorite" />
                      <ShortDescription
                        description={`Blue Yeti USB Microphone Blackout Edition`}
                        price={`$120.00`}
                      />
                    </div>
                    <AddToCartButton />
                  </div>

                  <div className="product-item accessories">
                    <div className="product product_filter">
                      <div className="product_image">
                        <img src={product4} alt="" />
                      </div>
                      <div className="product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center">
                        <span>sale</span>
                      </div>
                      <div className="favorite favorite_left" />
                      
                      <ShortDescription
                        description={`DYMO LabelWriter 450 Turbo Thermal Label Printer`}
                        price={`$410.00`}
                      />
                    </div>
                    <AddToCartButton />
                  </div>

                  <div className="product-item women men">
                    <div className="product product_filter">
                      <div className="product_image">
                        <img src={product5} alt="" />
                      </div>
                      <div className="favorite" />
                      <ShortDescription
                        description={`Pryma Headphones, Rose Gold & Grey`}
                        price={`$180.00`}
                      />
                    </div>
                    <AddToCartButton />
                  </div>

                  <div className="product-item accessories">
                    <div className="product discount product_filter">
                      <div className="product_image">
                        <img src={product6} alt="" />
                      </div>
                      <div className="favorite favorite_left" />
                      <div className="product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center">
                        <span>-$20</span>
                      </div>

                      <ShortDescription
                        description={`Fujifilm X100T 16 MP Digital Camera (Silver)`}
                        price={`$520.00`}
                        clearPrice={`$590.00`}
                      />
                    </div>
                    <AddToCartButton />
                  </div>

                  <div className="product-item women">
                    <div className="product product_filter">
                      <div className="product_image">
                        <img src={product7} alt="" />
                      </div>
                      <div className="favorite" />

                      <ShortDescription
                        description={`Samsung CF591 Series Curved 27-Inch FHD Monitor`}
                        price={`$610.00`}
                      />
                    </div>
                    <AddToCartButton />
                  </div>

                  <div className="product-item accessories">
                    <div className="product product_filter">
                      <div className="product_image">
                        <img src={product8} alt="" />
                      </div>
                      <div className="favorite" />

                      <ShortDescription
                        description={` Blue Yeti USB Microphone Blackout Edition`}
                        price={`$120.00`}
                      />
                    </div>
                    <AddToCartButton />
                  </div>

                  <div className="product-item men">
                    <div className="product product_filter">
                      <div className="product_image">
                        <img src={product9} alt="" />
                      </div>
                      <div className="product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center">
                        <span>sale</span>
                      </div>
                      <div className="favorite favorite_left" />

                      <ShortDescription
                        description={`DYMO LabelWriter 450 Turbo Thermal Label Printer`}
                        price={`$410.00`}
                      />
                    </div>
                    <AddToCartButton />
                  </div>

                  <div className="product-item men">
                    <div className="product product_filter">
                      <div className="product_image">
                        <img src={product10} alt="" />
                      </div>
                      <div className="favorite" />

                      <ShortDescription
                        description={`Pryma Headphones, Rose Gold & Grey`}
                        price={`$180.00`}
                      />
                    </div>
                    <AddToCartButton />
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewArrivalBlock;
