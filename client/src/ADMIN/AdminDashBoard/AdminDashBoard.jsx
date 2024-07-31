import { Navigate } from "react-router-dom";
import SideBar from "./SideBar/SideBar";
import NavigationBar from "./NavigationBar/NavigationBar";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const AdminDashBoard = () => {
  // getting state
  const username = useSelector((state) => state.adminData.information);
  if (!username) {
    return <Navigate to={"/"}></Navigate>;
  }

  return (
    <>
      <div className="grid lg:grid-cols-12 w-full h-scree transition duration-300 ease-in-out">
        <SideBar username={username} />
        <NavigationBar username={username} />
        <div className="relative lg:col-span-8 md:col-span-6 lg:col-start-4 lg:col-end-12 top-[10rem] transition duration-300 ease-in-out">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default AdminDashBoard;
