import { useEffect, useState } from "react";
import { getAllUsers } from "../InstitutionHelperFunction/InstitutionHelperFunction";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getUsersIdAction } from "../../../../../REDOX/Features/InstitutionSlice/InstitutionSlice";
import Waiting from "../../../../Waiting/Waiting";
function FindUserByInstitutionCode() {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const [userId, setUserId] = useState("");
  const [error, setError] = useState("");
  const [userData, setUserData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // get users
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await getAllUsers();
        if (response) {
          setUserData(response);
        }
      } catch (error) {
        return error;
      }
    };
    fetchUsers();
  }, []);

  /// submit

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const findUserId = userData?.find((user) => user.userId === userId);
    if (findUserId) {
      setIsLoading(false);
      dispatch(getUsersIdAction(userId));
      const currentPath = location.pathname;
      const newPath = currentPath.replace("find-user", "user-detail");
      setError("");
      return navigate(newPath, { replace: true, relative: true });
    } else {
      setError("Not Found");
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="container p-4 mx-auto">
        <div className="bg-[#d1d1d1] grid grid-cols-1 container mx-auto p-4 mt-12 pb-10">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold mb-4">Provide User ID</h2>
            <h2 className="text-xl font-normal text-[#FF0000]">{error}</h2>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mb-4 grid">
              <div>
                <label htmlFor="" className="block text-sm font-medium">
                  User ID
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
              {isLoading ? <Waiting /> : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default FindUserByInstitutionCode;
