import { createAction } from "@reduxjs/toolkit";

const addUserDataRequest = createAction("user/addUserDataRequest");
const addUserDataSucces = createAction("user/addUserDataSucces");
const addUserDataError = createAction("user/addUserDataError");
const resetUserDataError = createAction("user/resetUserDataError");

const getUserDataRequest = createAction("user/getUserDataRequest");
const getUserDataSucces = createAction("user/getUserDataSucces");
const getUserDataError = createAction("user/getUserDataError");

export { getUserDataRequest, getUserDataSucces, getUserDataError };

export {
  addUserDataRequest,
  addUserDataSucces,
  addUserDataError,
  resetUserDataError,
};
