import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { addInstitition } from "../../../../../REDOX/Features/InstitutionSlice/InstitutionSlice";
import axios from "axios";
import Waiting from "../../../../Waiting/Waiting";
import { replace, useFormik } from "formik";
import toast, { Toaster } from "react-hot-toast";
import { validateInstitution } from "../../../../Validator/Validator";
import { RegisterInstitutions } from "../../../../../ServerHelperFunction/ServerHelperFunction";

function RegisterInstitution() {
  const BASE_URL = "/api/admin/institution/new";
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const formik = useFormik({
    initialValues: {
      institutionName: "",
      institutionCode: "",
    },
    validate: validateInstitution,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      let institutionPromise = RegisterInstitutions(values);

      toast.promise(institutionPromise, {
        loading: <div>Validating...</div>,
        success: <div>Registration Successful</div>,
        error: <div>Registration failed</div>,
      });

      institutionPromise.then(() => {
        dispatch(addInstitition(values));
        const current = location.pathname;
        const newPath = current.replace(
          "create-institution",
          "manage-institution"
        );
        return navigate(newPath, { replace: true, relative: true });
      });
    },
  });

  return (
    <>
      {" "}
      <div className="bg-white grid grid-cols-1 container mx-auto p-4 mt-12">
        <Toaster position="center-top" reverseOrder={false}></Toaster>
        <h2 className="text-xl font-semibold mb-4">Registration Form</h2>
        <form
          className="grid justify-items-center"
          onSubmit={formik.handleSubmit}
        >
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
                {...formik.getFieldProps("institutionName")}
                type="text"
                className="mt-1 p-2 border rounded w-full hover:ring-1"
              />
            </div>
            <div>
              <label
                htmlFor="institution"
                className="block text-sm font-medium uppercase"
              >
                code
              </label>
              <input
                {...formik.getFieldProps("institutionCode")}
                type="text"
                className="mt-1 p-2 border rounded w-full hover:ring-1"
              />
            </div>
          </div>

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded w-full flex items-center justify-center"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default RegisterInstitution;
