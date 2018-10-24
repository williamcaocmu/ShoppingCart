import {
  GET_CATEGORIES,
  GET_PRODUCTS,
  GET_PRODUCTS_BY_CATEGORY
} from "./types";
import axios from "axios";

export const getCategories = () => dispatch => {
  axios
    .get(`http://api.demo.nordiccoder.com/api/categories`)
    .then(res =>
      dispatch({
        type: GET_CATEGORIES,
        payload: res.data.body
      })
    )
    .catch(err => console.log(err));
};

export const getProductsByCategory = id => dispatch => {
  axios
    .get(`http://api.demo.nordiccoder.com/api/categories/${id}/products`)
    .then(res => {
      console.log(res);
      dispatch({
        type: GET_PRODUCTS_BY_CATEGORY,
        payload: res.data.body
      });
    })
    .catch(err => {
      console.log(err);
    });
};

export const getProdcuts = (option = {}) => dispatch => {
  axios
    .get(
      `http://api.demo.nordiccoder.com/api/products?filter=${JSON.stringify(
        option
      )}`
    )
    .then(res => {
      dispatch({
        type: GET_PRODUCTS,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};
