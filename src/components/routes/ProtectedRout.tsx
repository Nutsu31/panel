import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { StateType } from "../../types/type";
const ProtectedRout = () => {
  const adminStatus = useSelector((state: StateType) => state.admin.status);

  return adminStatus === "ok" ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRout;
