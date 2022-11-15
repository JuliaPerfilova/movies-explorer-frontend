import {Route, Redirect} from "react-router-dom";
import Preloader from "../Preloader/Preloader";

const ProtectedRoute = ({path, isTokenChecked, isLoggedIn, children}) => {

  return (
    <Route path={path}>
      {
        isTokenChecked
          ? isLoggedIn
            ? children
            : <Redirect to={"/"}/>
          : <Preloader/>
      }
    </Route>
  );
}

export default ProtectedRoute;
