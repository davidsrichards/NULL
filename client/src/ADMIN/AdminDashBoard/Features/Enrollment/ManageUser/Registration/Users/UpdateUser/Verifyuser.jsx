import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { dispatchIdAction } from "../../../../../../../../REDOX/Features/UsersSlice/UsersSlice";
import axios from "axios";

function VerifyUser() {
  const BASE_URL = "/api/admin/user/all";
  // decleration of state
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const [userId, setUserId] = useState("");
  const [isFound, setIsFound] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const allUsers = async () => {
      const response = await axios
        .get(BASE_URL)
        .catch((err) => console.log(err.response));
      if (response) {
        setUsers(response.data);
      }
    };

    allUsers();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const finUserById = users.find((user) => user.userId === userId);
    if (finUserById) {
      setIsFound((prev) => !prev);
      dispatch(dispatchIdAction(userId));
    }

    !finUserById ? setErrorMessage("NOT FOUND") : setErrorMessage("");
  };

  useEffect(() => {
    if (isFound) {
      const currentPath = location.pathname;
      const newPath = currentPath.replace("verify-user", "update-user");
      navigate(newPath, { replace: true, relative: true });
    }
  }, [isFound]);
  return (
    <div className="container p-4 mx-auto">
      <div className="bg-[#d1d1d1] grid grid-cols-1 container mx-auto p-4 mt-12 pb-10">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold mb-4">Update User</h2>
          <h2 className="text-xl font-normal text-[#FF0000]">{errorMessage}</h2>
        </div>
        <form onSubmit={handleSubmit}>
          {/* Add input fields here */}
          {/* Example: */}
          <div className="mb-4 grid">
            <div>
              <label htmlFor="" className="block text-sm font-medium">
                user ID
              </label>
              <input
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                type="text"
                className="mt-1 p-2 border rounded w-full hover:ring-1 input"
              />
            </div>
          </div>

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded w-full transition duration-300 ease-in-out"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default VerifyUser;
