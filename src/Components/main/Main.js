import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";

import mainRoutes from "../../routes/mainRoutes";

import { isAuthSelector } from "../redux/auth/authSelectors";

const Main = () => {
  const isAuth = useSelector(isAuthSelector);
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if (isAuth && location.pathname === "/signin") {
      navigate("/profile");
    } else if (!isAuth && location.pathname === "/profile") navigate("/signin");
  }, [location.pathname, navigate, isAuth]);

  return (
    <main>
      <Routes>
        {mainRoutes.map(({ path, element: MyElement }) => (
          <Route path={path} element={<MyElement />} key={path} />
        ))}
      </Routes>
    </main>
  );
};

export default Main;
