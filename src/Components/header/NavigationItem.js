import React from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { isAuthSelector } from "../redux/auth/authSelectors";
import { activeLink } from "./NaviagationItem.module.css";
const NavigationItem = ({ path, name, isPrivate, isRestricted }) => {
  const isAuth = useSelector(isAuthSelector);
  return (
    <>
      {/* {!isPrivate && !isRestricted && (
        <li style={{ marginRight: "20px" }}>
          <Link to={path} style={{ textDecoration: "none" }}>
            {name}
          </Link>
        </li>
      )}
      {isPrivate && !isRestricted && isAuth && (
        <li style={{ marginRight: "20px" }}>
          <Link to={path} style={{ textDecoration: "none" }}>
            {name}
          </Link>
        </li>
      )}
      {!isAuth && !isPrivate && isRestricted && (
        <li style={{ marginRight: "20px" }}>
          <Link to={path} style={{ textDecoration: "none" }}>
            {name}
          </Link>
        </li>
      )} */}

      {((!isPrivate && !isRestricted) ||
        (isPrivate && !isRestricted && isAuth) ||
        (!isAuth && !isPrivate && isRestricted)) && (
        <li style={{ marginRight: "20px" }}>
          <NavLink
            to={path}
            // style={{ textDecoration: "none" }}
            style={({ isActive }) => {
              return {
                textDecoration: "none",
                color: isActive ? "red" : "green",
              };
            }}>
            {name}
          </NavLink>
        </li>
      )}
    </>
  );
};

export default NavigationItem;
