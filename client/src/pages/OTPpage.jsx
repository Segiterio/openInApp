import React, { useState } from "react";
import Template from "../components/Template";
import { useNavigate } from "react-router-dom";
import OtpInput from "react-otp-input";
import axios from "axios";
import { endpoints } from "../data/EndPoints";
import { toast } from "react-toastify";

const OTPpage = ({ signUpData, setSignUpData }) => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");
  return (
    <Template>
      <div className="flex items-center justify-center z-10 py-6 ">
        <div>
          <div className="p-8 shadow-md border border-gray-300 rounded">
            <h2 className="text-2xl font-semibold text-center">Enter OTP</h2>

            <form
              onSubmit={async (e) => {
                e.preventDefault();
                const taostID = toast.loading("Please wait...")
                try {
                  signUpData.otp = Number(otp);
                  // call create account api
                  console.log(signUpData);
                  const res = await axios.post(endpoints.SIGNUP, signUpData);
                  toast.dismiss(taostID);
                  toast.success(res.data.message);
                  navigate("/login")
                } catch (error) {
                  toast.dismiss(taostID)
                  toast.error(error.response.data.message)
                  console.log("error in create account", error);
                }
              }}
            >
              <OtpInput
                value={otp}
                onChange={setOtp}
                numInputs={6}
                renderSeparator={<span>-</span>}
                renderInput={(props) => <input {...props} />}
                placeholder="******"
                containerStyle={"my-5"}
                inputStyle={
                  "text-2xl mx-1 rounded shadow-xl placeholder:translate-y-1 focus:outline-none focus:ring-2 focus:ring-sky-400 text-gray-500"
                }
              />
              <div className="flex justify-center gap-5">
                <button
                  className="border px-2 rounded bg-blue-600 text-sm py-1 font-semibold text-white hover:bg-blue-500 duration-200"
                  onClick={() => setOtp("")}
                >
                  Clear
                </button>
                <button className="border px-2 rounded bg-blue-600 text-sm py-1 font-semibold text-white hover:bg-blue-500 duration-200">
                  Submit
                </button>
              </div>
            </form>
            <button
              className="mt-5 text-xs text-blue-500 font-medium"
              onClick={async () => {
                const taostID = toast.loading("Please wait ...");
                try {
                  const res = await axios.post(endpoints.SENDOTP, {email:signUpData.email});
                  toast.dismiss(taostID);
                  toast.success(res.data.message);
                } catch (error) {
                  toast.dismiss(taostID);
                  console.log("error", error);
                }
              }}
            >
              Resend OTP
            </button>
          </div>
          <div className="mt-5 text-sm font-medium text-gray-700">
            We send otp to{" "}
            <span className="text-">email:&nbsp;{signUpData.email}</span>
          </div>
        </div>
      </div>
    </Template>
  );
};

export default OTPpage;
