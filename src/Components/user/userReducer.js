import { createReducer, combineReducers } from "@reduxjs/toolkit";
import {
  signinSuccess,
  signout,
  signupSuccess,
} from "../redux/auth/authActions";
import {
  addUserDataRequest,
  addUserDataSucces,
  addUserDataError,
  resetUserDataError,
  getUserDataRequest,
  getUserDataSucces,
  getUserDataError,
} from "./userActions";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const userData = createReducer(
  {
    firstName: "",
    lastName: "",
  },
  {
    [addUserDataSucces]: (state, action) => ({ ...state, ...action.payload }),
    [getUserDataSucces]: (_, action) => action.payload,
    [signout]: () => ({ firstName: "", lastName: "" }),
  }
);
const loader = createReducer(false, {
  [addUserDataRequest]: () => true,
  [addUserDataSucces]: () => false,
  [addUserDataError]: () => false,
  [getUserDataRequest]: () => true,
  [getUserDataSucces]: () => false,
  [getUserDataError]: () => false,
  [signout]: () => false,
});

const error = createReducer("", {
  [addUserDataError]: (_, action) => action.payload,
  [getUserDataError]: (_, action) => action.payload,
  [resetUserDataError]: () => "",
  [signout]: () => "",
});

const commonReducer = createReducer(
  { email: "", displayName: "", localId: "" },
  {
    [signupSuccess]: (_, action) => ({
      email: action.payload.email,
      displayName: action.payload.displayName,
      localId: action.payload.localId,
    }),
    [signinSuccess]: (_, action) => ({
      email: action.payload.email,
      displayName: action.payload.displayName,
      localId: action.payload.localId,
    }),
    [signout]: () => ({ email: "", displayName: "", localId: "" }),
  }
);
const config = {
  key: "localId",
  storage,
  whitelist: ["localId"],
};

const persistedCommonReducer = persistReducer(config, commonReducer);

export const userReducer = combineReducers({
  common: persistedCommonReducer,
  data: userData,
  loader,
  error,
});
