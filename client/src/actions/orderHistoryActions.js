import axios from "axios";
import { FETCH_ORDER_HISTORY } from "./types";

// GET LOGGED IN USER
export const fetchOrderHistory = (user_id) => async (dispatch) => {
  const { data } = await axios.get(`/api/orderhistory/${user_id}`);

  dispatch({
    type: FETCH_ORDER_HISTORY,
    payload: data,
  });
};
