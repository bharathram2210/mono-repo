import { createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "./protectedRoute";
import LoginPage from "../pages/login";
import DashboardPage from "../pages/dashboard";

const isAuthenticated = () => {
  const token = localStorage.getItem("token");
  return !token ? true : false;
};

const routes = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    element: <ProtectedRoute isAuthenticated={isAuthenticated()} />,
    children: [
      {
        path: "/",
        element: <DashboardPage />,
      },
      {
        path: "*",
        element: <p>404 Error - Nothing here...</p>,
      },
    ],
  },
]);

export default routes;
