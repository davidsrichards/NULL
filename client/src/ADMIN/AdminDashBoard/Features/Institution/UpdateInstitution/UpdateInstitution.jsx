import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import Waiting from "../../../../Waiting/Waiting";

function RegisterInstitution() {
  const BASE_URL = "/api/admin/institution/update/";
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  // decleration of states
  const [institution, setInstitution] = useState({
    institutionName: "",
    institutionCode: "",
  });

  const [nameError, setnameError] = useState("");
  const [codeError, setCodeError] = useState("");
  const [existed, setExisted] = useState("");
  const [isValidate, setIsvalidate] = useState(false);
  const [Isloading, setIsLoading] = useState(false);

  const { institutionId } = useSelector((state) => state.institutionData);

  /// handle name changes

  const handleNameChanges = (e) => {
    setInstitution((prev) => ({ ...prev, institutionName: e.target.value }));
  };

  // handle CODE changes

  const handleCodeChanges = (e) => {
    setInstitution((prev) => ({ ...prev, institutionCode: e.target.value }));
  };
  const { institutionName, institutionCode } = institution;
  // handle submit button
  // errors
  const handleError = (err, setter, serverMsg) => {
    const findError = err.response.data.find(({ msg }) => msg === serverMsg);
    return findError ? setter(serverMsg) : setter("");
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const response = await axios
      .put(BASE_URL + institutionId, {
        institutionName,
        institutionCode,
      })
      .catch((err) => {
        setIsLoading(false);
        if (typeof err.response.data !== "string") {
          handleError(err, setnameError, "please provide institution name");
          handleError(err, setCodeError, "CODE must be four Digits");
          setExisted("");
        }

        if (typeof err.response.data === "string") {
          setExisted("Institution Already Exist");
          setnameError("");
          setCodeError("");
        }
      });
    if (response) {
      setIsLoading(false);
      setnameError("");
      setCodeError("");
      setExisted("");
      setIsvalidate((prev) => !prev);
    }

    // setting items to the store
  };
  useEffect(() => {
    if (isValidate) {
      const currentPath = location.pathname;
      const newPath = currentPath.replace(
        "update-institution",
        "manage-institution"
      );
      navigate(newPath, { replace: true, relative: true });
    }
  }, [isValidate]);

  return (
    <>
      {" "}
      <div className="bg-white grid grid-cols-1 container mx-auto p-4 mt-12">
        <h2 className="text-xl font-semibold mb-4">Update Institution</h2>
        <form onSubmit={handleSubmit} className="grid justify-items-center">
          {/* input fields */}
          <div className="mb-4 grid lg:grid-cols-2 lg:gap-2 w-full">
            <div>
              <label
                htmlFor="institution"
                className="block text-sm font-medium uppercase"
              >
                name
              </label>
              <input
                value={institution.institutionName}
                onChange={handleNameChanges}
                type="text"
                className="mt-1 p-2 border rounded w-full hover:ring-1"
              />
              <p className="text-red-500">{nameError}</p>
            </div>
            <div>
              <label
                htmlFor="institution"
                className="block text-sm font-medium uppercase"
              >
                code
              </label>
              <input
                value={institution.institutionCode}
                onChange={handleCodeChanges}
                type="text"
                className="mt-1 p-2 border rounded w-full hover:ring-1"
              />
              <p className="text-red-500">{codeError}</p>
            </div>
          </div>
          <p className="text-red-500 pb-2">{existed}</p>

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded w-full flex items-center justify-center"
          >
            {Isloading ? <Waiting /> : "Submit"}
          </button>
        </form>
      </div>
    </>
  );
}

export default RegisterInstitution;
