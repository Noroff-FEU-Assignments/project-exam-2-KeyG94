import { useContext } from "react";
import AuthContext from "../../../context/AuthContext";
import {
  HOME,
  LOGIN,
  RESULTS,
  DETAIL,
  BASE_URL,
} from "../../../constants/baseUrl";

//check if you are on the client (browser) or server
const isBrowser = () => typeof window !== "undefined";

const ProtectedRoute = ({ router, children }) => {
  const [auth, setAuth] = useContext(AuthContext);
  console.log(auth.user);

  //Identify authenticated user
  const isAuthenticated = auth.user;

  let unprotectedRoutes = [`/`, `/login`, `/results`];

  /**
   * @var pathIsProtected Checks if path exists in the unprotectedRoutes routes array
   */
  let pathIsProtected = unprotectedRoutes.indexOf(router.pathname) === -1;

  if (isBrowser() && !isAuthenticated && pathIsProtected) {
    router.push("/login");
  }

  return children;
};

export default ProtectedRoute;
