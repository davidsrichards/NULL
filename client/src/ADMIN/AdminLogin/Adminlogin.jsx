import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addAdminAction } from "../../REDOX/Features/AdminSlice/AdminSlice";
import {
  FunctionToGet,
  FunctionToPost,
} from "../HelperFunction/HelperFunction";
import Waiting from "../Waiting/Waiting";
import axios from "axios";
import ServerError from "../AdminDashBoard/Loading/ServerError";

function AdminLogin() {
  const [isLoading, setIsLoading] = useState(false);
  const [serverError, setServerError] = useState(false);
  const BASE_URL = "/api/admin";
  // dispatch
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [admin, setAdmin] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const [isValid, setIsValid] = useState(false);

  /// handle username
  const handleUsername = (e) => {
    setAdmin((prev) => ({ ...prev, username: e.target.value }));
  };

  /// handle password
  const handlePassword = (e) => {
    setAdmin((prev) => ({ ...prev, password: e.target.value }));
  };

  // post admin

  // handleSubmit
  const { username, password } = admin;
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const response = await axios
      .post(`${BASE_URL}/login`, {
        username,
        password,
      })
      .catch((err) => {
        setIsLoading(false);
        typeof err.response.data === "string"
          ? setError("Invalid Credentials")
          : setError("");
        typeof err.response.data !== "string"
          ? setServerError(true)
          : setServerError(false);
      });

    if (response) {
      setIsValid((prev) => !prev);
      setIsLoading(false);
      setServerError(false);
    }
  };

  const state = useSelector((state) => state);

  useEffect(() => {
    if (isValid) {
      dispatch(addAdminAction({ username, password }));
      navigate("/dashboard");
    }
    console.log(state);
  }, [isValid]);

  return (
    <section className="bg-neutral-200 dark:bg-neutral-700 grid justify-items-center p-4 sm:h-auto h-screen">
      <div className="container h-full sm:px-10 px-2">
        <div className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
          <div className="w-full">
            <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
              <div className="g-0 lg:flex lg:flex-wrap">
                {/* <!-- Left column container--> */}
                <div className="px-4 md:px-0 lg:w-6/12">
                  <div className="md:mx-6 ">
                    {/* <!--Logo--> */}
                    <div className="text-center">
                      <img
                        className="mx-auto w-48 relative top-4 pb-4"
                        src=" https://th.bing.com/th/id/R.b2b34517339101a111716be1c203f354?rik=e5WHTShSpipi3Q&pid=ImgRaw&r=0"
                        alt="logo"
                      />
                      <h4 className="mb-3 mt-1 pb-1 text-xl font-semibold">
                        Admin Login
                      </h4>
                      <h6 className="mb-12 text-red-500 transition-all duration-300 ease-in-out">
                        {error}
                      </h6>
                    </div>

                    <form onSubmit={handleSubmit}>
                      <p className="mb-4">Please login to your account</p>
                      {/* <!--Username input--> */}
                      <div className="grid gap-4">
                        <div>
                          <label htmlFor="">username</label>
                          <input
                            value={admin.username}
                            onChange={handleUsername}
                            type="text"
                            className="w-full p-2 ring-1  text-black hover:ring-blue-400 hover:bg-[#f0f0f0] outline-none transition duration-300 ease-in-out"
                          />
                        </div>
                        {/* password */}
                        <div>
                          <label htmlFor="">password</label>
                          <input
                            value={admin.password}
                            onChange={handlePassword}
                            type="password"
                            className="w-full p-2 ring-1  text-black hover:ring-blue-400 hover:bg-[#f0f0f0] outline-none transition duration-300 ease-in-out"
                          />
                        </div>
                      </div>

                      {/* <!--Submit button--> */}
                      <div className="pb-1 pt-1 text-center mt-4">
                        <button
                          className="mb-3 items-center justify-center flex w-full rounded px-6 pb-3 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                          type="submit"
                          style={{
                            background:
                              "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
                          }}
                        >
                          {isLoading ? <Waiting /> : "LOG IN"}
                        </button>
                      </div>
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
                      In the world of coding, patience and persistence are your
                      greatest allies. Every bug is a lesson, every error a
                      stepping stone to mastery. Embrace the challenges, for
                      they shape you into a better programmer
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

export default AdminLogin;
