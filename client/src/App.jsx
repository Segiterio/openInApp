import { Routes, Route,Link } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import NotFound from "./pages/404NotFound";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";
import OTPpage from "./pages/OTPpage";

function App() {

  const [data, setData] = useState({
    email: "",
    password: "",
    firstName:"",
    lastName:"",
    confirmPassword:"",
  });

  return (
    <>
      <div className="bg-[#F8FAFF]">
        <Routes>
          <Route path="/" element={<div className="w-screen border h-screen flex justify-center items-center text-4xl font-bold"><Link className="border-2 active:scale-95 px-4 py-2 border-black" to="/login" >Go to login</Link></div>} />
          <Route path="/dashboard" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp data={{...data}} setData={setData} />} />
          <Route path="/verify-otp" element={<OTPpage signUpData={{...data}} setSignUpData={setData} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
