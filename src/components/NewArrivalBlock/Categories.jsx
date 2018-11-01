import React from "react";

const Categories = props => {
  const { categories } = props.categories;

  const renderCategories = categories =>
    categories.length > 0
      ? categories.map(item => (
          <li
            onClick={() => props.onHandleCategories(item.id)}
            key={item.id}
            className={`grid_sorting_button button d-flex flex-column justify-content-center align-items-center is-checked ${
              props.selectedCategory === item.id ? "active" : null
            }`}
          >
            {item.name}
          </li>
        ))
      : null;

  return (
    <div className="new_arrivals_sorting">
      <ul className="arrivals_grid_sorting clearfix button-group ">
        {" "}
        {/* <li
                onClick={() => props.onHandleCategories("all")}
                className={`grid_sorting_button button d-flex flex-column justify-content-center align-items-center is-checked `}
              >
                all
              </li> */}{" "}
        {renderCategories(categories)}{" "}
        {/* <li
                      onClick={this.filterAll}
                      className={`grid_sorting_button button d-flex flex-column justify-content-center align-items-center is-checked ${
                        this.state.itemActive === "all" ? "active" : ""
                      }`}
                    >
                      all{" "}
                    </li>{" "}
                    <li
                      onClick={this.filterWomen}
                      className={`grid_sorting_button button d-flex flex-column justify-content-center align-items-center is-checked ${
                        this.state.itemActive === "women" ? "active" : ""
                      }`}
                    >
                      women 's{" "}
                    </li>{" "}
                    <li
                      onClick={this.filterAccessories}
                      className={`grid_sorting_button button d-flex flex-column justify-content-center align-items-center ${
                        this.state.itemActive === "acc" ? "active" : ""
                      } `}
                    >
                      accessories{" "}
                    </li>{" "}
                    <li
                      onClick={this.filterMen}
                      className={`grid_sorting_button button d-flex flex-column justify-content-center align-items-center ${
                        this.state.itemActive === "men" ? "active" : ""
                      }`}
                    >
                      men 's{" "}
                    </li>{" "} */}{" "}
      </ul>{" "}
    </div>
  );
};

export default Categories;
