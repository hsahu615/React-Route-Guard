import { Navigate, Outlet } from "react-router-dom";

function PrivateRoute({ isAuthenticated }) {
  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
}

export default PrivateRoute;
