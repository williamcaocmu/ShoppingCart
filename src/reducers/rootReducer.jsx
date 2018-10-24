import { combineReducers } from "redux";
import categoryReducer from "../Week4/components/productCategoryReducer";

export const rootReducer = combineReducers({
  category: categoryReducer
});
