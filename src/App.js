import React, { Component } from "react";

import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NewArrivalBlock from "./components/NewArrivalBlock";
import DealOfWeekend from "./components/DealOfWeekend";
import Shipping from "./components/Shipping";
import HeroBanner from "./components/HeroBanner";
import QuickCategoryBar from "./components/QuickCategoryBar";

class App extends Component {
  render() {
    return (
      <div className="super_container">
        <Header />
        <HeroBanner />
        <QuickCategoryBar />
        <NewArrivalBlock />
        <DealOfWeekend />
        <Shipping />
        <Footer />
      </div>
    );
  }
}

export default App;
