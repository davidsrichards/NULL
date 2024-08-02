import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";

function NavItems() {
  const [isVisible, setVisible] = useState(false);
  return (
    <ul
      role="list"
      className="divide-y first:pb-0 last:pb-0 text-[1.4rem] bg-gray-800 text-gray-400 absolute top-20 right-4 border p-6 w-[20rem] rounded-sm"
    >
      <li className="p-4 w-full hover:bg-gray-700 transition duration-300 ease-in-out">
        <Link to={"enrollment"}>Enrollment</Link>
      </li>
      <li className="p-4 w-full hover:bg-gray-700 transition duration-300 ease-in-out">
        <Link to={"institution"}>Institution</Link>
      </li>
      <li className="p-4 w-full hover:bg-gray-700 transition duration-300 ease-in-out">
        <Link to={"/dashboard/institution/verify-institution-code"}>
          Find User
        </Link>
      </li>
      <li className="p-4 w-full  flex items-center justify-between  hover:bg-gray-700 transition duration-300 ease-in-out">
        <Link to={"profile"}>Profile</Link>
        <FaAngleDown
          onClick={() => setVisible((prev) => !prev)}
          className={` rotate-${
            isVisible ? "180" : "0"
          } transition duration-300 ease-in-out`}
        />
      </li>
      {/*  */}
      <li
        className={`${
          isVisible ? "block" : "hidden"
        } p-4 w-full hover:bg-gray-700 transition duration-300 ease-in-out`}
      >
        <Link to={"/"}>Log Out</Link>
      </li>
    </ul>
  );
}

export default NavItems;
