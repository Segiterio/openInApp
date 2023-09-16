import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";

const Modal = ({ setShowModal }) => {
  const formPostions = [
    { id: 0, title: "Basic" },
    {
      id: 1,
      title: "Contact",
    },
  ];

  const [position, setPosition] = useState(0);

  return (
    <div className="fixed inset-0 bg-opacity-50 bg-gray-500 flex items-center justify-center font-Figtree text-black ">
      <div className="flex flex-col w-11/12 md:w-[550px]">
        <div className="border rounded-t-lgPlus bg-white">
          <div className="flex justify-between items-center px-4 py-2">
            <div className="">Add New Profile</div>
            <RxCross2
              className="hover:cursor-pointer"
              onClick={() => {
                setShowModal(false);
              }}
            />
          </div>
        </div>
        <div className="border rounded-b-lgPlus p-2 bg-white ">
          <div className="grid-cols-2 gap-5 grid mb-4">
            {formPostions.map((item) => (
              <div className="flex flex-col gap-1" key={item.id}>
                <div
                  className="self-center hover:cursor-pointer"
                  onClick={() => {
                    if (position == 1) {
                      setPosition(0);
                    } else {
                      setPosition(1);
                    }
                    return;
                  }}
                >
                  {item.title}
                </div>
                <div
                  className={`w-full rounded-full h-1 ${
                    position == item.id ? "bg-blue-600" : "bg-[#D9D9D9]"
                  }`}
                ></div>
              </div>
            ))}
          </div>
          <form>
            {position == 0 ? (
              <div className="grid gap-4">
                <div className="flex flex-col gap-2 ">
                  <label
                    htmlFor="name"
                    className="after:content-['*'] after:text-red-500"
                  >
                    Enter Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="border rounded-lg focus:outline-none px-2 py-1 text-[#999CA0]  placeholder:text-[#999CA0] "
                    placeholder="Eg. John Doe"
                  />
                </div>
                <div className="flex flex-col gap-2 ">
                  <label
                    htmlFor="email"
                    className="after:content-['*'] after:text-red-500"
                  >
                    Enter Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="border rounded-lg focus:outline-none px-2 py-1 text-[#999CA0]  placeholder:text-[#999CA0] "
                    placeholder="Eg. JohnDoe@email.com"
                  />
                </div>
                <div className="flex flex-col gap-2 ">
                  <label
                    htmlFor="phone"
                    className="after:content-['*'] after:text-red-500"
                  >
                    Enter Phone
                  </label>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    className="border rounded-lg focus:outline-none px-2 py-1 text-[#999CA0] placeholder:text-[#999CA0] "
                    placeholder="Eg. 7071724540"
                  />
                  <div
                    className="self-end border px-2 py-1 bg-[#3E84F8] rounded-md mt-2 text-white "
                    onClick={() => {
                      setPosition(1);
                    }}
                  >
                    Next
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-2 ">
                  <label
                    htmlFor="insta"
                    className="after:content-['*'] after:text-red-500"
                  >
                    Instagram Link <span>{"(Optional)"}</span>
                  </label>
                  <input
                    type="email"
                    id="insta"
                    name="insta"
                    className="border rounded-lg focus:outline-none px-2 py-1 text-[#999CA0]  placeholder:text-[#999CA0] "
                    placeholder="Eg. ..instagram.com/username"
                  />
                </div>
                <div className="flex flex-col gap-2 ">
                  <label
                    htmlFor="phone"
                    className="after:content-['*'] after:text-red-500"
                  >
                    Youtube Link <span>{"(Optional)"}</span>
                  </label>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    className="border rounded-lg focus:outline-none px-2 py-1 text-[#999CA0] placeholder:text-[#999CA0] "
                    placeholder="Eg. ..youtebe/username"
                  />
                  <div className="self-end flex gap-2">
                    <div
                      className="border px-2 py-1 rounded-md hover:cursor-pointer mt-2 text-black "
                      onClick={() => {
                        setPosition(0);
                      }}
                    >
                      Back
                    </div>
                    <div
                      className="border px-2 py-1 bg-[#3E84F8] hover:cursor-pointer rounded-md mt-2 text-white "
                      onClick={() => {}}
                    >
                      Submit
                    </div>
                  </div>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
