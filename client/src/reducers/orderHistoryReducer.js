/* eslint-disable import/no-anonymous-default-export */
import { FETCH_ORDER_HISTORY } from "../actions/types";

export default (state = null, action) => {
  switch (action.type) {
    case FETCH_ORDER_HISTORY:
      return action.payload || false;
    default:
      return state;
  }
};
