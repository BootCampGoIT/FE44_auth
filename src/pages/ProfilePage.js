import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import ProfileForm from "../Components/profile/ProfileForm";
import { getUserDataOperation } from "../Components/user/userOperations";
const ProfilePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserDataOperation());
  }, [dispatch]);
  return (
    <>
      <ProfileForm />
    </>
  );
};

export default ProfilePage;
