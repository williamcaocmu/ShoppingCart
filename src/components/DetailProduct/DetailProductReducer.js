import { GET_PRODUCT_BY_ID } from "./types";

const initState = {
  product: {}
};

export default function(state = initState, action) {
  switch (action.type) {
    case GET_PRODUCT_BY_ID: {
      return {
        ...state,
        product: action.payload
      };
    }
    default:
      return state;
  }
}
