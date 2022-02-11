import axios from "axios";
import { FETCH_USER, FETCH_SHOPPING_SESSION } from "./types";

// GET LOGGED IN USER
export const fetchUser = () => async (dispatch) => {
  const res = await axios.get("/api/current_user");

  dispatch({
    type: FETCH_USER,
    payload: res.data,
  });

  return res.data;
};

// GET LOGGED IN USER'S SHOPPING SESSION
// IF USER DOESN'T HAVE CURRENT SESSION, POST ONE
export const fetchShoppingSession = (id, email) => async (dispatch) => {
  let data;

  let res = await axios.get(`/api/shoppingsession/${id}`);
  data = res.data[0];

  if (!res.data[0] && id) {
    res = await axios.post("/api/shoppingsession", {
      user_id: id,
      email: email,
    });
    data = res.data;
  }

  dispatch({
    type: FETCH_SHOPPING_SESSION,
    payload: data,
  });
};

// ON APP LOAD, FETCH USER THEN FETCH SHOPPING SESSION
export const fetchUserAndShoppingSession = () => async (dispatch) => {
  const res = await dispatch(fetchUser());
  dispatch(fetchShoppingSession(res._id, res.email));
};
