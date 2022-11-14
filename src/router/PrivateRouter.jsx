import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { ContainerContext } from "../App";

const PrivateRouter = () => {
  const { user } = useContext(ContainerContext);
  return <div>{user ? <Outlet /> : <Navigate to="/login" />}</div>;
};
export default PrivateRouter;
