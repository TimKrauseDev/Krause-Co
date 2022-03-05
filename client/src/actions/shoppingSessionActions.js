import axios from "axios";
import {
  PUT_ADD_PRODUCT,
  PUT_REMOVE_PRODUCT,
  PUT_UPDATE_PRODUCT,
} from "./types";

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
  (userID, productID) => async (dispatch) => {
    const res = await axios.put(
      `/api/shoppingsession/removeitem/${userID}`,
      productID
    );

    dispatch({
      type: PUT_REMOVE_PRODUCT,
      payload: res.data,
    });
  };

// PUT UPDATE PRODUCT QUANTITY
export const updateProductQuantity =
  (userID, productUpdate) => async (dispatch) => {
    const res = await axios.put(
      `/api/shoppingsession/updatequantity/${userID}`,
      productUpdate
    );

    dispatch({
      type: PUT_UPDATE_PRODUCT,
      payload: res.data,
    });
  };
