import { Outlet,  } from "react-router-dom";

const AuthWrapper = () => {
//   const location = useLocation();
//   const token = localStorage.getItem("token");
//   const currentPath = location.pathname;

//   let firstRender = true;

//   if (!token) {
//     return <Navigate to="login" replace state={{ from: location }} />;
//   }

//   if (currentPath === "/" && firstRender) {
//     firstRender = false;
//     return <Navigate to="/m_pin" replace state={{ edit: "confirm" }} />;
//   }

//   if (currentPath === "/" && !firstRender) {
//     return <Navigate to="/dashboard" replace />;
//   }

  return (
    <div>
      <Outlet />
    </div>
  );
};

export default AuthWrapper;
