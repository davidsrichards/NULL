import { Link } from "react-router-dom";
import SidebarItems from "./SidebarItems/SidebarItems";
import { FaAngleDown } from "react-icons/fa";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { resetAllAction } from "../../../REDOX/Features/AdminSlice/AdminSlice";

function SideBar({ username }) {
  const dispatch = useDispatch();
  const [enrollVisible, setEnrollVisible] = useState(false);
  const [instituteVisible, setInstituteVisible] = useState(false);
  const [profileVisible, setProfileVisible] = useState(false);

  return (
    <div className="bg-[#2f4050] hover:bg-[#384860] text-white h-screen w-0 lg:h-screen lg:w-64 overflow-auto fixed top-0 left-0 transition-all duration-500 ease-in-out z-50">
      {/* Navigation Header */}
      <div className="flex items-center justify-between p-4">
        <span className="text-xl font-semibold uppercase">
          WELCOME {username}
        </span>
      </div>

      {/* Admin Menu */}
      <nav className="mt-4">
        <ul>
          <li className="p-4 hover:bg-gray-700 cursor-pointer flex items-center justify-between">
            <Link to={"enrollment"}>Enrollment</Link>
            <FaAngleDown
              onClick={() => setEnrollVisible((prev) => !prev)}
              className={`${
                enrollVisible ? " rotate-180" : " rotate-0"
              } transition duration-300 ease-in-out`}
            />
          </li>

          <li
            className={`${enrollVisible ? "block" : "hidden"} relative -top-2 `}
          >
            <SidebarItems
              to={"/dashboard/enrollment/create-user"}
              value={"Create User"}
            />
            <SidebarItems
              to={"/dashboard/enrollment/verify-user"}
              value={"Update User"}
            />
            <SidebarItems
              to={"/dashboard/enrollment/manage-user"}
              value={"Manage User"}
            />
          </li>

          <li className="p-4 hover:bg-gray-700 cursor-pointer flex items-center justify-between">
            <Link to={"institution"}>Institutions</Link>
            <FaAngleDown
              onClick={() => setInstituteVisible((prev) => !prev)}
              className={`${
                instituteVisible ? " rotate-180" : " rotate-0"
              } transition duration-300 ease-in-out`}
            />
          </li>

          <li
            className={`${
              instituteVisible ? "block" : "hidden"
            } relative -top-2 transition duration-500 ease-in-out`}
          >
            <SidebarItems
              to={"/dashboard/institution/create-institution"}
              value={"Create Institution"}
            />
            <SidebarItems
              to={"/dashboard/institution/update-institution"}
              value={"Update Institution"}
            />
            <SidebarItems
              to={"/dashboard/institution/manage-institution"}
              value={"Manage Institution"}
            />
          </li>

          <li className="p-4 hover:bg-gray-700 cursor-pointer  flex items-center justify-between">
            <Link to={"profile"}>Profile</Link>
            <FaAngleDown
              onClick={() => setProfileVisible((prev) => !prev)}
              className={`${
                profileVisible ? " rotate-180" : " rotate-0"
              } transition duration-300 ease-in-out`}
            />
          </li>
          <li
            className={`${
              profileVisible ? "block" : "hidden"
            } relative -top-2 transition duration-500 ease-in-out`}
          >
            <ul className="grid  w-full transition duration-500 ease-in-out cla">
              <Link to={"/"} onClick={() => dispatch(resetAllAction())}>
                <li className="hover:bg-gray-700 cursor-pointer p-4 w-full transition duration-500 ease-in-out">
                  Log out
                </li>
              </Link>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default SideBar;
