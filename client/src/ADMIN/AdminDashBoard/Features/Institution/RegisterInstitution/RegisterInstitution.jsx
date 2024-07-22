import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { addInstitition } from "../../../../../REDOX/Features/InstitutionSlice/InstitutionSlice";
import axios from "axios";
import Waiting from "../../../../Waiting/Waiting";

function RegisterInstitution() {
  const BASE_URL = "/api/admin/institution/new";
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  // decleration of states
  const [institution, setInstitution] = useState({
    institutionName: "",
    institutionCode: "",
    institutionId: "",
  });
  const [nameError, setnameError] = useState("");
  const [codeError, setCodeError] = useState("");
  const [existed, setExisted] = useState("");
  const [isValidate, setIsvalidate] = useState(false);
  const [Isloading, setIsLoading] = useState(false);

  // handle input change

  /// handle name changes

  const handleNameChanges = (e) => {
    setInstitution((prev) => ({ ...prev, institutionName: e.target.value }));
  };

  // handle CODE changes

  const handleCodeChanges = (e) => {
    setInstitution((prev) => ({ ...prev, institutionCode: e.target.value }));
  };
  const { institutionName, institutionCode, institutionId } = institution;
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
      .post(BASE_URL, {
        institutionName,
        institutionCode,
      })
      .catch((err) => {
        if (typeof err.response.data !== "string") {
          setIsLoading(false);
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
      setInstitution((prev) => ({
        ...prev,
        institutionId: response.data.institutionID,
      }));
      setnameError("");
      setCodeError("");
      setExisted("");
      setIsvalidate((prev) => !prev);
    }

    // setting items to the store
  };

  useEffect(() => {
    if (isValidate) {
      dispatch(
        addInstitition({ institutionName, institutionCode, institutionId })
      );
      const currentPath = location.pathname;
      const newPath = currentPath.replace(
        "create-institution",
        "manage-institution"
      );
      navigate(newPath, { replace: true, relative: true });
    }
  }, [isValidate]);

  return (
    <>
      {" "}
      <div className="bg-white grid grid-cols-1 container mx-auto p-4 mt-12">
        <h2 className="text-xl font-semibold mb-4">Registration Form</h2>
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
