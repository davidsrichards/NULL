import { MdCreateNewFolder } from "react-icons/md";
import { Link, Outlet } from "react-router-dom";

function Institutiton() {
  return (
    <>
      <div className="w-full container grid sm:grid-cols-3 grid-cols-1 mx-auto gap-4 p-4">
        <button className="btn bg-blue-500 hover:bg-blue-600 text-white px-2 py-4 rounded shadow-md flex items-center justify-center transition duration-300 ease-in-out">
          <Link to={"create-institution"} className="flex items-center">
            <MdCreateNewFolder className="text-[2rem]" />
          </Link>
        </button>
        <button className="bg-green-500 hover:bg-green-600 text-white px-2 py-4 rounded shadow-md transition duration-300 ease-in-out">
          <Link to={"verify-institution"}>Update Institution</Link>
        </button>
        <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-2 py-4 rounded shadow-md transition duration-300 ease-in-out">
          <Link to={"manage-institution"}>Manage Institution</Link>
        </button>
      </div>
      <Outlet />
    </>
  );
}

export default Institutiton;
