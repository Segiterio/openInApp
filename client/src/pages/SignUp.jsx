import React from 'react'
import Template from '../components/Template'
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
import { endpoints } from '../data/EndPoints';
const SignUp = ({data,setData}) => {
  const navigate = useNavigate();
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
                Create Account
              </h1>
              <p className="font-Lato ">sign in to your account</p>
            </div>
            {/* <!-- form --> */}
            <div>
              <form
                className="flex font-Lato gap-2 flex-col rounded-lgPlus bg-white p-4"
                onSubmit={async(e) => {
                  e.preventDefault();
                  console.log(data, "data");
                  const toastID = toast.loading("Please wait...")
                  try {
                   const res = await axios.post(endpoints.SENDOTP,{email:data.email});
                   toast.dismiss(toastID);
                   toast.success(res.data.message);
                   navigate("/verify-otp");
                  }catch(error){
                    toast.dismiss(toastID);
                    toast.error(error.response.data.message);
                    console.log("error",error);
                  }
                 
                }}
              >
                <div className="flex flex-col gap-1">
                  <label htmlFor="firstName">First name</label>
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    value={data.firstName}
                    required={true}
                    onChange={handleFormData}
                    className="focus:outline-none border rounded-lgPlus px-4 py-1 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 bg-[#EAEAEA]"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label htmlFor="lastName">Last name</label>
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    value={data.lastName}
                    required={true}
                    onChange={handleFormData}
                    className="focus:outline-none border rounded-lgPlus px-4 py-1 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 bg-[#EAEAEA]"
                  />
                </div>
                
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

              
                <div className="flex flex-col gap-1">
                  <label htmlFor="confirmPassword">Confirm password</label>
                  <input
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                    required={true}
                    value={data.confirmPassword}
                    onChange={handleFormData}
                    className="focus:outline-none border rounded-lgPlus px-4 py-1 focus:border-sky-500 focus:ring-1 focus:ring-sky-500 bg-[#EAEAEA]"
                  />
                </div>
                <div>
                  <button className=" font-Montserrat bg-[#4285F4] font-bold text-white w-full rounded-lgPlus py-1 ">
                    Create Account
                  </button>
                </div>
              </form>
              <div className="text-center mt-3 text-[#858585]">
                Already have an account?
                <Link to="/login" className="text-[#346BD4]">
                  &nbsp;Go to Login
                </Link>
              </div>
            </div>
          </div>
        </div>
    </Template>
  )
}

export default SignUp