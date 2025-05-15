import { Navigate } from "react-router-dom";
import Layout from "../layout";

interface IsAuthenticatedProps {
  isAuthenticated: boolean;
}

const ProtectedRoute: React.FC<IsAuthenticatedProps> = ({
  isAuthenticated,
}) => {
  if (isAuthenticated === false) {
    return <Navigate to="/login" replace />;
  }
  return <Layout />;
};

export default ProtectedRoute;
