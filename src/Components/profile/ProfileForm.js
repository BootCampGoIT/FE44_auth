import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUserDataOperation } from "../user/userOperations";

const ProfileForm = () => {
    const dispatch = useDispatch()
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
  });
  const onHandleSubmit = (e) => {
    e.preventDefault();
    dispatch(addUserDataOperation(user))
  };

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={onHandleSubmit}>
      <label>
        firstName:
        <input
          type='text'
          name='firstName'
          value={user.firstName}
          onChange={onHandleChange}
        />
      </label>
      <label>
        lastName:
        <input
          type='text'
          name='lastName'
          value={user.lastName}
          onChange={onHandleChange}
        />
      </label>
      <button type='submit'>Save</button>
    </form>
  );
};

export default ProfileForm;
