import AuthPage from "../pages/AuthPage";
import HomePage from "../pages/HomePage";
import ProfilePage from "../pages/ProfilePage";

const mainRoutes = [
  {
    name: "Home",
    path: "/",
    exact: true,
    element: HomePage,
    isPrivate: false,
    isRestricted: false,
  },
  // ==========
  {
    name: "Profile",
    path: "/profile",
    exact: true,
    element: ProfilePage,
    isPrivate: true,
    isRestricted: false,
  },
  // =============
  {
    name: "Sign Up",
    path: "/signup",
    exact: true,
    element: AuthPage,
    isPrivate: false,
    isRestricted: true,
  },
  {
    name: "Sign In",
    path: "/signin",
    exact: true,
    element: AuthPage,
    isPrivate: false,
    isRestricted: true,
  },
];

export default mainRoutes;
