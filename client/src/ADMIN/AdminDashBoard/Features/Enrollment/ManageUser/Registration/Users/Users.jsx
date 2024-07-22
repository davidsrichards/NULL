import { MdCreateNewFolder } from "react-icons/md";
import { Link, Outlet } from "react-router-dom";

function Users() {
  return (
    <>
      <div className="w-full container grid sm:grid-cols-3 grid-cols-1 mx-auto gap-4 p-4 transition-all duration-500 ease-in-out">
        <button className="btn bg-blue-500 hover:bg-blue-600 text-white px-2 py-4 rounded shadow-md flex items-center justify-center transition duration-300 ease-in-out">
          <Link to={"create-user"} className="flex items-center">
            <MdCreateNewFolder className="text-[2rem] " />
          </Link>
        </button>
        <button className="bg-green-500 hover:bg-green-600 text-white px-2 py-4 rounded shadow-md transition duration-300 ease-in-out">
          <Link to={"verify-user"}>Update User</Link>
        </button>
        <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-2 py-4 rounded shadow-md transition duration-300 ease-in-out">
          <Link to={"manage-user"}>Manage Users</Link>
        </button>
      </div>

      <Outlet />
    </>
  );
}

export default Users;

{
  /* <div className="flex items-center justify-around  
   grid grid-cols-3 xl:w-[70rem] lg:w-[60rem] md:w-[50rem] gap-10 container mx-auto p-4
  md:justify-around lg:w-[45rem]  w-full">
<button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded shadow-md">
  <Link to={"create-user"}>
    <MdCreateNewFolder className="text-[2rem]" />
  </Link>
</button>
<button className="bg-green-500 hover:bg-green-600 text-white px-4 py-4 rounded shadow-md">
  Update User
</button>
<button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-4 rounded shadow-md">
  Manage Users
</button>
</div> */
}
