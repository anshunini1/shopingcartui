import { combineReducers } from "redux";
import auth from "./auth";
import commomn from "./common";
export default combineReducers({
    auth,
    commomn
  });