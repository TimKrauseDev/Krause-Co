import { combineReducers } from "redux";
import authReducer from "./authReducer";
import productReducer from "./productReducer";
import shoppingSessionReducer from "./shoppingSessionReducer";

export default combineReducers({
  auth: authReducer,
  prod: productReducer,
  shoppingSession: shoppingSessionReducer,
});
