import { useEffect, useState } from "react";
import { findInstitution } from "../InstitutionHelperFunction/InstitutionHelperFunction";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getUsersCodeAction } from "../../../../../REDOX/Features/InstitutionSlice/InstitutionSlice";
import Waiting from "../../../../Waiting/Waiting";

function VerifyInstitutionCode() {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const [institutionCode, setInstitutionCode] = useState("");
  const [error, setError] = useState("");
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  /// fetch institution

  useEffect(() => {
    const fetchInstitution = async () => {
      try {
        const response = await findInstitution();
        if (response) {
          setData(response);
        }
      } catch (error) {
        return error;
      }
    };
    fetchInstitution();
  }, []);

  // handle submit

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const findInstitution = data?.find(
      (data) => data.institutionCode === institutionCode
    );
    if (findInstitution) {
      setIsLoading(false);
      dispatch(getUsersCodeAction(institutionCode));
      setError("");
      const currentPath = location.pathname;
      const newPath = currentPath.replace(
        "verify-institution-code",
        "find-user"
      );
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
            <h2 className="text-xl font-semibold mb-4">
              Provide Institution Code
            </h2>
            <h2 className="text-xl font-normal text-[#FF0000]">{error}</h2>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mb-4 grid">
              <div>
                <label htmlFor="" className="block text-sm font-medium">
                  CODE
                </label>
                <input
                  value={institutionCode}
                  onChange={(e) => setInstitutionCode(e.target.value)}
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 p-2 border rounded w-full hover:ring-1"
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

export default VerifyInstitutionCode;
