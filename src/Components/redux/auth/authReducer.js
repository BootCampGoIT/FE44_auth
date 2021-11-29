import { createReducer, combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import {
  signupError,
  signupRequest,
  signupSuccess,
  signinRequest,
  signinSuccess,
  signinError,
  resetError,
  signout,
} from "./authActions";
import storage from "redux-persist/lib/storage";

const loader = createReducer(false, {
  [signupRequest]: () => true,
  [signupSuccess]: () => false,
  [signupError]: () => false,
  [signinRequest]: () => true,
  [signinSuccess]: () => false,
  [signinError]: () => false,
  [signout]: () => false,
});

const error = createReducer("", {
  [signupError]: (_, action) => action.payload,
  [signinError]: (_, action) => action.payload,
  [resetError]: () => "",
  [signout]: () => "",
});
const tokens = createReducer(
  { idToken: "", refreshToken: "" },
  {
    [signupSuccess]: (_, action) => ({
      idToken: action.payload.idToken,
      refreshToken: action.payload.refreshToken,
    }),
    [signinSuccess]: (_, action) => ({
      idToken: action.payload.idToken,
      refreshToken: action.payload.refreshToken,
    }),
    [signout]: () => ({ idToken: "", refreshToken: "" }),
  }
);

const persistConfig = {
  key: "tokens",
  storage,
};
const tokensPersistedReducer = persistReducer(persistConfig, tokens);

export const authReducer = combineReducers({
  tokens: tokensPersistedReducer,
  loader,
  error,
});
