import { combineReducers } from "redux";
import { userReducer } from "../user/userReducer";
import { authReducer } from "./auth/authReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
});

export default rootReducer;
