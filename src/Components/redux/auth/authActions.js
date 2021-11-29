import { createAction } from "@reduxjs/toolkit";

const signupRequest = createAction("auth/signupRequest");
const signupSuccess = createAction("auth/signupSuccess");
const signupError = createAction("auth/signupError");

export { signupRequest, signupSuccess, signupError };

const signinRequest = createAction("auth/signinRequest");
const signinSuccess = createAction("auth/signinSuccess");
const signinError = createAction("auth/signinError");

const resetError = createAction("auth/resetError");
const signout = createAction("auth/signout");

export { signinRequest, signinSuccess, signinError, resetError, signout };
