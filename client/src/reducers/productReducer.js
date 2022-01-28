/* eslint-disable import/no-anonymous-default-export */
import { FETCH_PRODUCTS, FETCH_PRODUCT_BY_SLUG } from "../actions/types";

export default (state = null, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return action.payload || false;
    case FETCH_PRODUCT_BY_SLUG:
      return action.payload || false;
    default:
      return state;
  }
};
