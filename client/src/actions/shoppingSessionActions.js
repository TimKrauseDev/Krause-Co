import axios from "axios";
import { PUT_ADD_PRODUCT, PUT_REMOVE_PRODUCT } from "./types";

// PUT ADD PRODUCT TO SHOPPING CART
export const addProductToShoppingSession =
  (id, product) => async (dispatch) => {
    const res = await axios.put(`/api/shoppingsession/additem/${id}`, product);

    dispatch({
      type: PUT_ADD_PRODUCT,
      payload: res.data,
    });
  };

// PUT REMOVE PRODUCT TO SHOPPING CART
export const removeProductFromShoppingSession =
  (product) => async (dispatch) => {
    console.log(product);

    dispatch({
      type: PUT_REMOVE_PRODUCT,
    });
  };
