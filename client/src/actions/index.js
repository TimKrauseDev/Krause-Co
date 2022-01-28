import axios from "axios";
import { FETCH_USER, FETCH_PRODUCTS, FETCH_PRODUCT_BY_SLUG } from "./types";

export const fetchUser = () => async (dispatch) => {
  const res = await axios.get("/api/current_user");

  dispatch({
    type: FETCH_USER,
    payload: res.data,
  });
};

export const fetchProducts = (category) => async (dispatch) => {
  const res = await axios.get(`/api/products/${category}`);

  dispatch({
    type: FETCH_PRODUCTS,
    payload: res.data,
  });
};

export const fetchProductBySlug = (slug) => async (dispatch) => {
  const res = await axios.get(`/api/productbyslug/${slug}`);

  dispatch({
    type: FETCH_PRODUCT_BY_SLUG,
    payload: res.data[0],
  });
};
