import React, { Component } from "react";
import { Route } from "react-router-dom";

import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
// import NewArrivalBlock from "./components/NewArrivalBlock/NewArrivalBlock";
// import DealOfWeekend from "./components/DealOfWeekend";
// import Shipping from "./components/Shipping";
// import HeroBanner from "./components/HeroBanner";
// import QuickCategoryBar from "./components/QuickCategoryBar";
import ProductCategoryPage from "./Week4/components/ProductCategoryPage";
import DetailProduct from "./components/DetailProduct";

class App extends Component {
  render() {
    return (
      <div className="super_container">
        <Header />
        <Route exact path="/products" component={ProductCategoryPage} />
        <Route exact path="/products/:id" component={DetailProduct} />
        <Footer />
      </div>
    );
  }
}

export default App;
