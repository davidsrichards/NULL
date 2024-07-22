import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { institutionIdAction } from "../../../../../../REDOX/Features/InstitutionSlice/InstitutionSlice";

function VerifyInstitution() {
  const BASE_URL = "/api/admin/institution/get/all";
  // dispatch

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  // decleration of states
  const [institution, setInstitution] = useState({
    institutionID: "",
  });
  const [allinstition, setAllInstitution] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const [isFound, setIsFound] = useState(false);

  // handle code change

  const handleIDChanges = (e) => {
    setInstitution((prev) => ({ ...prev, institutionID: e.target.value }));
  };

  useEffect(() => {
    const getAllInstitution = async () => {
      const response = await axios.get(BASE_URL).catch((err) => {
        if (err) {
          console.log(err.response.data);
        }
      });
      if (response) {
        console.log(response.data);
        setAllInstitution(response.data);
      }
    };
    getAllInstitution();
  }, []);

  // handle submit

  const handleSubmit = (e) => {
    e.preventDefault();
    const findinstitution = allinstition.find(
      (institute) => institute.institutionID === institution.institutionID
    );

    if (findinstitution) {
      setIsFound((prev) => !prev);
      dispatch(institutionIdAction(institution.institutionID));
    }
    !findinstitution ? setErrorMessage("Not Found") : setErrorMessage("");

    // serching institution
  };

  // if verify

  useEffect(() => {
    if (isFound) {
      const current = location.pathname;
      const newPath = current.replace(
        "verify-institution",
        "update-institution"
      );
      navigate(newPath, { replace: true, relative: true });
    }
  }, [isFound]);

  return (
    <div className="container p-4 mx-auto">
      <div className="bg-[#d1d1d1] grid grid-cols-1 container mx-auto p-4 mt-12 pb-10">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold mb-4">Update Institution</h2>
          <h2 className="text-xl font-normal text-[#FF0000]">{errorMessage}</h2>
        </div>
        <form onSubmit={handleSubmit}>
          {/* Add input fields here */}
          {/* Example: */}
          <div className="mb-4 grid">
            <div>
              <label htmlFor="" className="block text-sm font-medium">
                instittion ID
              </label>
              <input
                value={institution.institutionID}
                onChange={handleIDChanges}
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
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default VerifyInstitution;
