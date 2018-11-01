import { combineReducers } from "redux";
import categoryReducer from "../Week4/components/productCategoryReducer";
import product from "../components/DetailProduct/DetailProductReducer";

export const rootReducer = combineReducers({
  category: categoryReducer,
  selectedProduct: product
});
