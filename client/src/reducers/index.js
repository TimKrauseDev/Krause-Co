import { combineReducers } from "redux";
import authReducer from "./authReducer";
import productReducer from "./productReducer";
import shoppingSessionReducer from "./shoppingSessionReducer";
import orderHistoryReducer from "./orderHistoryReducer";

export default combineReducers({
  auth: authReducer,
  prod: productReducer,
  shoppingSession: shoppingSessionReducer,
  orderHistory: orderHistoryReducer,
});
