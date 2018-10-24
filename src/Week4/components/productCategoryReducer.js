import {
  GET_CATEGORIES,
  GET_PRODUCTS,
  GET_PRODUCTS_BY_CATEGORY
} from "./types";

const initState = {
  categories: [],
  products: [],
  pagination: {}
};

export default function(state = initState, action) {
  switch (action.type) {
    case GET_CATEGORIES:
      return {
        ...state,
        categories: action.payload
      };
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload.body,
        pagination: action.payload.pagination
      };
    case GET_PRODUCTS_BY_CATEGORY:
      return {
        ...state,
        products: action.payload
      };
    default:
      return state;
  }
}
