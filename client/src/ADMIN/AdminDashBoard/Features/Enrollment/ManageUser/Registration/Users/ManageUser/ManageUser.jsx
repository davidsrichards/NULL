import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { deleteUser } from "../../../../../../../../REDOX/Features/UsersSlice/UsersSlice";
import EmptyMessages from "../../../../../Key/EmptyMessages/EmptyMessages";
import { FuncionToDelete } from "../../../../../../../HelperFunction/HelperFunction";
import { useEffect, useState } from "react";
import axios from "axios";
import ServerError from "../../../../../../Loading/ServerError";
import Isloading from "../../../../../../Loading/Loading";

function ManageUser() {
  const BASE_URL = "/api/admin/user/delete";
  const ALL_USERS = "/api/admin/user/all";
  const [allusers, setAllusers] = useState([]);
  const [error, setError] = useState("");
  const [serverError, setServerError] = useState(false);
  const [loading, setLoading] = useState(false);

  /// dispatch

  // getting items from the state

  useEffect(() => {
    setLoading(true);
    const fetData = async () => {
      const response = await axios.get(ALL_USERS).catch((err) => {
        if (err) {
          setError(err.response.data);
          setServerError(true);
          setLoading(false);
        }
      });

      if (response) {
        setAllusers(response.data);
        setServerError(false);
        setLoading(false);
      }
    };
    fetData();
  }, []);

  const handleDelete = async (id) => {
    const response = await FuncionToDelete(`${BASE_URL}/${id}`);
    setAllusers((user) =>
      user.filter((user) => user.userId !== response.data.userId)
    );
    allusers.map(({ userId }) => console.log(userId));
  };

  if (!loading && allusers.length < 1 && !serverError) return <EmptyMessages />;

  if (loading) return <Isloading />;
  if (serverError) return <ServerError />;

  return (
    <div className="bg-white grid grid-cols-1 container mx-auto p-4 mt-12 justify-items-center">
      <h2 className="text-xl font-semibold mb-4 text-blue-500">
        List Of Available users
      </h2>

      <form className="w-full flex items-center justify-center flex-col gap-4">
        {/* input field */}
        <table className="w-full border">
          <thead className="w-full">
            <tr className="font-semibold">
              <td className="p-4">NAME</td>
              {/*  <td className="p-4 lg:block hidden transition-all duration-500 ease-in-out">
                EMAIL
              </td> */}
              <td className="p-4 ">CONTACT</td>
              <td className="p-4">ID</td>
            </tr>
          </thead>
          <tbody className="mt-4">
            {allusers.map(
              (
                { firstname, email, lga, phoneNumber, maritalStatus, userId },
                i
              ) => (
                <tr
                  className="manage group/items h-[4rem] text-slate-600 w-full border"
                  key={i}
                >
                  <td className=" pb-2 p-4">{firstname}</td>
                  {/*  <td className=" pb-2 p-4 lg:block hidden transition-all duration-500 ease-in-out">
                    {email}
                  </td> */}
                  <td className=" pb-2 p-4 ">{phoneNumber}</td>
                  <td className="pb-2 p-4">{userId}</td>
                  <td>
                    <MdDelete
                      className="group/items relative right-8 top-1 text-[1.3rem] text-red-500 cursor-pointer invisible group-hover/items:visible transition duration-300 ease-in-out hover:scale-125"
                      onClick={async () => {
                        await handleDelete(userId);
                      }}
                    />
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </form>
    </div>
  );
}

export default ManageUser;
