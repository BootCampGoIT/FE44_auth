import axios from "axios";
import {
  addUserDataError,
  addUserDataRequest,
  addUserDataSucces,
  getUserDataError,
  getUserDataRequest,
  getUserDataSucces,
} from "./userActions";

export const addUserDataOperation =
  (credentials) => async (dispatch, getState) => {
    const localId = getState().user.common.localId;
    const idToken = getState().auth.tokens.idToken;
    dispatch(addUserDataRequest());
    try {
      const { data } = await axios.post(
        process.env.REACT_APP_BASE_URL +
          `/${localId}/profile.json?auth=${idToken}`,
        credentials
      );
      //   console.log(`response`, data);
      dispatch(addUserDataSucces({ ...credentials, id: data.name }));
    } catch (error) {
      dispatch(addUserDataError(error.message));
    }
  };

export const getUserDataOperation = () => async (dispatch, getState) => {
  const localId = getState().user.common.localId;
  const idToken = getState().auth.tokens.idToken;
  dispatch(getUserDataRequest());
  try {
    const { data } = await axios.get(
      process.env.REACT_APP_BASE_URL +
        `/${localId}/profile.json?auth=${idToken}`
    );
    if (data) {
      const userData = Object.keys(data).map((key) => ({
        id: key,
        ...data[key],
      }));
      dispatch(getUserDataSucces(userData[0]));
    }
  } catch (error) {
    dispatch(getUserDataError(error.message));
  }
};

// const thunk = (store) => (next) => (action) => {
//   if (action.constructor.name === "asyncFunction") {
//     return addUserDataOperation(action.payload)(store.dispatch, store.getState);
//   } else next(action);
// };
