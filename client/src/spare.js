import React, { useState } from "react";
import { TEInput, TERipple } from "tw-elements-react";

function User() {
  return (
    <section className="h-screen bg-neutral-200 dark:bg-neutral-700">
      <div className="container h-full p-10">
        <div className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
          <div className="w-full">
            <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
              <div className="g-0 lg:flex lg:flex-wrap">
                <div className="px-4 md:px-0 lg:w-6/12">
                  <div className="md:mx-6 md:p-12">
                    <div className="text-center">
                      <img
                        className="mx-auto w-48"
                        src="https://th.bing.com/th/id/R.b2b34517339101a111716be1c203f354?rik=e5WHTShSpipi3Q&pid=ImgRaw&r=0"
                        alt="logo"
                      />
                      <h4 className="mb-12 mt-1 pb-1 text-xl font-semibold">
                        Admin Login
                      </h4>
                    </div>

                    <form className="grid gap-4">
                      <p className="mb-4">Please login to your account</p>
                      {/* <!--Username input--> */}
                      <div className="grid gap-4">
                        <div>
                          <label htmlFor="">username</label>
                          <input type="text" className="w-full p-2 ring-1" />
                        </div>
                        {/* password */}
                        <label htmlFor="">password</label>
                        <input type="password" className="w-full p-2 ring-1" />
                      </div>

                      {/* <!--Submit button--> */}
                      <div className="mb-12 pb-1 pt-1 text-center">
                        <button
                          className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                          type="button"
                          style={{
                            background:
                              "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
                          }}
                        >
                          Log in
                        </button>

                        {/* <!--Forgot password link--> */}
                        <a href="#!">Forgot password?</a>
                      </div>

                      {/* <!--Register button--> */}
                    </form>
                  </div>
                </div>

                {/* <!-- Right column container with background and description--> */}
                <div
                  className="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none"
                  style={{
                    background:
                      "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
                  }}
                >
                  <div className="px-4 py-6 text-white md:mx-6 md:p-12">
                    <h4 className="mb-6 text-xl font-semibold">
                      Hello!!! still under development
                    </h4>
                    <p className="text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default User;

<button
  type="submit"
  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded w-full"
>
  Submit
</button>;

//   const handleChange = (e) => {
/* const { name, value } = e.target;
  setFormData((prevData) => ({ ...prevData, [name]: value }));
};
 */

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import {
  searchedUserAction,
  updateUserAction,
} from "../../../../../../../../REDOX/Features/UsersSlice/UsersSlice";
import { FuncionToUpdate } from "../../../../../../../HelperFunction/HelperFunction";

function UpdateUser() {
  const BASE_URL = "/api/admin/user/update/";
  // decleration of state
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  /*   const [userId, setUserId] = useState(""); */
  const [isFound, setIsFound] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [users, setUsers] = useState({
    firstname: "",
    lastname: "",
    email: "",
    userId: "",
  });

  // data from state
  const state = useSelector((state) => state.userData.usersInformation);
  //// handle submit
  const handleFirstname = (e) => {
    setUsers((prev) => ({ ...prev, firstname: e.target.value }));
  };
  const handleLastname = (e) => {
    setUsers((prev) => ({ ...prev, lastname: e.target.value }));
  };
  const handleEmail = (e) => {
    setUsers((prev) => ({ ...prev, email: e.target.value }));
  };
  const handleId = (e) => {
    setUsers((prev) => ({ ...prev, userId: e.target.value }));
  };

  // update

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { firstname, lastname, email, userId } = users;
    dispatch(updateUserAction({ firstname, lastname, email, userId }));
   
  };

  useEffect(() => {
    if (isFound) {
      const currentPath = location.pathname;
      const newPath = currentPath.replace("update-user", "searched-user");
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
                firstname
              </label>
              <input
                value={users.firstname}
                onChange={handleFirstname}
                type="text"
                className="mt-1 p-2 border rounded w-full hover:ring-1 input"
              />
            </div>
            {/*  */}
            <div>
              <label htmlFor="" className="block text-sm font-medium">
                lastname
              </label>
              <input
                value={users.lastname}
                onChange={handleLastname}
                type="text"
                className="mt-1 p-2 border rounded w-full hover:ring-1 input"
              />
            </div>
            {/*  */}
            <div>
              <label htmlFor="" className="block text-sm font-medium">
                email
              </label>
              <input
                value={users.email}
                onChange={handleEmail}
                type="text"
                className="mt-1 p-2 border rounded w-full hover:ring-1 input"
              />
            </div>
            <div>
              <label htmlFor="" className="block text-sm font-medium">
                ID
              </label>
              <input
                value={users.userId}
                onChange={handleId}
                type="text"
                className="mt-1 p-2 border rounded w-full hover:ring-1 input"
              />
            </div>
            {/*  */}
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

export default UpdateUser;




const BASE_URL = "/api/admin/institution/update/";
const dispatch = useDispatch();

// decleration of states
const [institution, setInstitution] = useState({
  institutionName: "",
  institutionCode: "",

});
const [nameError, setnameError] = useState("");
const [codeError, setCodeError] = useState("");
const [existed, setExisted] = useState("");
const [isValidate, setIsvalidate] = useState(false);

// handle input change

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
  const response = await axios
    .put(BASE_URL, {
      institutionName,
      institutionCode,
    })
    .catch((err) => {
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
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded w-full"
        >
          Submit
        </button>
      </form>
    </div>
  </>
);