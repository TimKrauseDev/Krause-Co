/* eslint-disable import/no-anonymous-default-export */
import {
  FETCH_SHOPPING_SESSION,
  PUT_ADD_PRODUCT,
  PUT_REMOVE_PRODUCT,
  PUT_UPDATE_PRODUCT,
} from "../actions/types";

export default (state = null, action) => {
  switch (action.type) {
    case FETCH_SHOPPING_SESSION:
      return action.payload || false;
    case PUT_ADD_PRODUCT:
      return action.payload || false;
    case PUT_REMOVE_PRODUCT:
      return action.payload || false;
    case PUT_UPDATE_PRODUCT:
      return action.payload || false;
    default:
      return state;
  }
};
