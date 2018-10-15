import React, { Component } from "react";

import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NewArrivalBlock from "./components/NewArrivalBlock/NewArrivalBlock";
import DealOfWeekend from "./components/DealOfWeekend";
import Shipping from "./components/Shipping";
import HeroBanner from "./components/HeroBanner";
import QuickCategoryBar from "./components/QuickCategoryBar";
import ProductCategoryPage from "./Week4/components/ProductCategoryPage";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <ProductCategoryPage />
        <Footer />
      </div>
    );
  }
}

export default App;
