import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import toast, { Toaster } from "react-hot-toast";
import Waiting from "../Waiting/Waiting";
import { validateLogin } from "../Validator/Validator";
import { AdminLogins } from "../../ServerHelperFunction/ServerHelperFunction";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addAdminAction } from "../../REDOX/Features/AdminSlice/AdminSlice";

function AdminLogin() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validate: validateLogin,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      let loginPromise = AdminLogins(values);
      toast.promise(loginPromise, {
        loading: <div>Progressing...</div>,
        success: <div>Successful</div>,
        error: <div>Invalid Credentials</div>,
      });
      loginPromise.then(() => {
        dispatch(addAdminAction(values.username));

        navigate("/dashboard");
      });
    },
  });

  const [isLoading, setIsLoading] = useState(false);

  return (
    <section className="bg-neutral-2 h-screen dark:bg-neutral-700 flex items-center justify-center bg-neutral-50">
      <Toaster position="center-top" reverseOrder={false}></Toaster>
      <div className="g-0 lg:flex lg:flex-wrap w-full  items-center justify-center">
        {/* <!-- Left column container--> */}
        <div className="px-4 md:px-0 lg:w-6/12 ad-shadow bg-neutral-50">
          <div className="md:mx-6">
            {/* <!--Logo--> */}
            <div className="text-center">
              <img
                className="mx-auto w-48 relative top-4 pb-4 rounded-full"
                src=" https://th.bing.com/th/id/R.b2b34517339101a111716be1c203f354?rik=e5WHTShSpipi3Q&pid=ImgRaw&r=0"
                alt="logo"
              />
              <h4 className="mb-3 mt-1 pb-1 text-xl font-semibold">
                Admin Login
              </h4>
              <h6 className="mb-12 text-red-500 transition-all duration-300 ease-in-out"></h6>
            </div>

            <form action="" onSubmit={formik.handleSubmit}>
              <p className="mb-4">Please login to your account</p>
              {/* <!--Username input--> */}
              <div className="grid gap-4">
                <div>
                  <label htmlFor="">username</label>
                  <input
                    {...formik.getFieldProps("username")}
                    type="text"
                    className="w-full p-2 ring-1  text-black hover:ring-blue-400 hover:bg-[#f0f0f0] outline-none transition duration-300 ease-in-out rounded-md"
                  />
                </div>
                {/* password */}
                <div>
                  <label htmlFor="">password</label>
                  <input
                    {...formik.getFieldProps("password")}
                    type="password"
                    className="w-full p-2 ring-1  text-black hover:ring-blue-400 hover:bg-[#f0f0f0] outline-none transition duration-300 ease-in-out rounded-md"
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
      </div>
    </section>
  );
}

export default AdminLogin;
