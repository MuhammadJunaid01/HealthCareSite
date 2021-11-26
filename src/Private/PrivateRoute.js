import UseAuth from "./../hooks/useAuth/UseAuth";
import { Route, Redirect } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";

const PrivateRoute = ({ children, ...rest }) => {
  let { user, isLoading } = UseAuth();
  console.log("user private", user);
  console.log("private", isLoading);
  if (isLoading) {
    return (
      <div>
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
