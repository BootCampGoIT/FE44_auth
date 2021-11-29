import React from "react";
import { useDispatch, useSelector } from "react-redux";

import mainRoutes from "../../routes/mainRoutes";
import { signout } from "../redux/auth/authActions";
import { isAuthSelector } from "../redux/auth/authSelectors";
import NavigationItem from "./NavigationItem";

const Header = () => {
  const isAuth = useSelector(isAuthSelector);
  const dispatch = useDispatch();
  const logout = () => dispatch(signout());
  return (
    <header style={{ height: "60px", backgroundColor: "lightgrey" }}>
      <ul className='list' style={{ display: "flex", listStyle: "none" }}>
        {mainRoutes.map((route) => (
          <NavigationItem {...route} key={route.path} />
        ))}
        {isAuth && (
          <li
            style={{ marginRight: "20px", cursor: "pointer" }}
            onClick={logout}>
            <span>Sign out</span>
          </li>
        )}
      </ul>
    </header>
  );
};

export default Header;
