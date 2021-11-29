import axios from "axios";
import {
  signupRequest,
  signupSuccess,
  signupError,
  signinRequest,
  signinError,
  signinSuccess,
} from "./authActions";

const signUpOperation = (user) => async (dispatch, getState) => {
  dispatch(signupRequest());
  try {
    const response = await axios.post(process.env.REACT_APP_SIGNUP_URL, {
      ...user,
      returnSecureToken: true,
    });
    dispatch(signupSuccess(response.data));
  } catch (error) {
    console.log(error);
    dispatch(signupError(error.message));
  }
};
const signInOperation = (user) => async (dispatch, getState) => {
  dispatch(signinRequest());
  try {
    const response = await axios.post(process.env.REACT_APP_SIGNIN_URL, {
      ...user,
      returnSecureToken: true,
    });
    dispatch(signinSuccess(response.data));
  } catch (error) {
    dispatch(signinError(error.message));
  }
};

export { signUpOperation, signInOperation };
