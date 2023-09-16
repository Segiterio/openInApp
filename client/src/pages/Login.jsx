import React, { useState } from "react";
import Template from "../components/Template";
import { GoogleLogin } from "@react-oauth/google";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { endpoints } from "../data/EndPoints";
import jwtDecode from "jwt-decode";

const Login = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  function handleFormData(e) {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <Template>
      <div className="flex items-center justify-center z-10 py-6 ">
        <div className="flex flex-col gap-4">
          <div>
            <h1 className="sm:text-4xl text-2xl font-bold font-Montserrat">
              Sign In
            </h1>
            <p className="font-Lato ">sign in to your account</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-2 justify-between">
            <GoogleLogin
              onSuccess={async (credetials) => {
                console.log(credetials);
                const data = await jwtDecode(credetials.credential);
                // console.log(data)
                localStorage.setItem(
                  "user",
                  JSON.stringify({
                    imageUrl: data.picture,
                    firstName: data.name,
                  })
                );
                navigate("/dashboard");
              }}
              onError={(error) => {console.log(error)
               toast.error("Something went wrong")}}
              useOneTap
            />

            <div className="flex gap-2 items-center px-4 py-1 rounded-[3px] border-slate-300 border bg-white hover:bg-[#f8fcff] duration-100">
              {/* <!-- apple icon --> */}
              <i className="fa-brands fa-apple fa-xs"></i>
              <p className="text-xs text-[#858585] font-medium">
                Sign in with Apple
              </p>
            </div>
          </div>

          {/* <!-- form --> */}

          <div>
            <form
              className="flex font-Lato gap-2 flex-col rounded-lgPlus bg-white p-4"
              onSubmit={async (e) => {
                e.preventDefault();
                console.log(data, "data");
                const toastID = toast.loading("Please wait...");
                try {
                  const res = await axios.post(endpoints.LOGIN, data);
                  toast.dismiss(toastID);
                  localStorage.setItem("user", JSON.stringify(res.data.data));
                  toast.success(res.data.message);
                  navigate("/dashboard");
                } catch (error) {
                  toast.dismiss(toastID);
                  // toast.error(error.response.error);
                  console.log("error", error);
                }
              }}
            >
              <div className="flex flex-col gap-1">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={data.email}
                  required={true}
                  onChange={handleFormData}
                  className="focus:outline-none border rounded-lgPlus px-4 py-1 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 bg-[#EAEAEA]"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  required={true}
                  value={data.password}
                  onChange={handleFormData}
                  className="focus:outline-none border rounded-lgPlus px-4 py-1 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 bg-[#EAEAEA]"
                />
              </div>

              <span className="text-[#346BD4]"> Forgot password? </span>

              <div>
                <button className=" font-Montserrat bg-[#4285F4] font-bold text-white w-full rounded-lgPlus py-1 ">
                  Submit
                </button>
              </div>
            </form>
            <div className="text-center mt-3 text-[#858585]">
              Don't have an account?
              <Link to="/signup" className="text-[#346BD4]">
                &nbsp;Register here
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Template>
  );
};

export default Login;
