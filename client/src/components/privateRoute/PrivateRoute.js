import { Navigate, Outlet } from "react-router-dom";

const PrivateOutlet = () => {
  const token = sessionStorage.getItem("token");

  return <div>{token ? <Outlet /> : <Navigate to="/login" />}</div>;
};

export default PrivateOutlet;