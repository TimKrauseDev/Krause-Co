import axios from "axios";
import { FETCH_PRODUCTS, FETCH_PRODUCT_BY_SLUG } from "./types";

// FETCH ALL PRODUCTS W/ OR W/O CATEGORY
export const fetchProducts = (category) => async (dispatch) => {
  const res = await axios.get(`/api/products/${category}`);

  dispatch({
    type: FETCH_PRODUCTS,
    payload: res.data,
  });
};

// FETCH INDIVIDUAL PRODUCT
export const fetchProductBySlug = (slug) => async (dispatch) => {
  const res = await axios.get(`/api/productbyslug/${slug}`);

  dispatch({
    type: FETCH_PRODUCT_BY_SLUG,
    payload: res.data[0],
  });
};
