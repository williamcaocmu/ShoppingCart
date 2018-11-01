import axios from "axios";
import { GET_PRODUCT_BY_ID } from "./types";

export const getProductById = id => dispatch => {
  axios
    .get(`http://api.demo.nordiccoder.com/api/products/${id}`)
    .then(res => {
      dispatch({
        type: GET_PRODUCT_BY_ID,
        payload: res.data.body
      });
    })
    .catch(err => console.log(err));
};
