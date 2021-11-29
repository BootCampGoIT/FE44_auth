import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router";
import { signInOperation, signUpOperation } from "../redux/auth/authOperations";

const AuthForm = () => {
  const [user, setUser] = useState({
    displayName: "",
    email: "",
    password: "",
  });
  const location = useLocation();
  const dispatch = useDispatch();

  const onHandleSubmit = (e) => {
    e.preventDefault();
    isRegisterPage()
      ? dispatch(signUpOperation(user))
      : dispatch(
          signInOperation({ email: user.email, password: user.password })
        );
  };

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const isRegisterPage = () => location.pathname === "/signup";

  return (
    <form onSubmit={onHandleSubmit}>
      {isRegisterPage() && (
        <label>
          displayName:
          <input
            type='text'
            name='displayName'
            value={user.displayName}
            onChange={onHandleChange}
          />
        </label>
      )}
      <label>
        email:
        <input
          type='text'
          name='email'
          value={user.email}
          onChange={onHandleChange}
        />
      </label>
      <label>
        password:
        <input
          type='text'
          name='password'
          value={user.password}
          onChange={onHandleChange}
        />
      </label>
      <button type='submit'>{isRegisterPage() ? "Sign Up" : "Sign In"}</button>
    </form>
  );
};

export default AuthForm;
