import React, { useState } from "react";
import Main from "../components/Main";
import Header from "../components/header";
import Sidebar from "../components/SideBar";
import MobileSideBar from "../components/MobileSideBar";

const Home = () => {
  const [mobileSidebar, setShowSideBar] = useState(false);
  return (
    <>
     {mobileSidebar && <MobileSideBar setShowSideBar={setShowSideBar} />}
      <div className="max-w-maxContainer mx-auto w-[95%]">
        <div className="w-full flex gap-4">
          <div className="w-1/6 max-w-[280px] py-2 sticky top-0 h-screen hidden lg:block">
            <Sidebar />
          </div>
          <div className="flex-grow pt-2 pb-5">
            <Header setShowSideBar={setShowSideBar} />
            <Main />
          </div>
        </div>
      </div>
     
    </>
  );
};

export default Home;
