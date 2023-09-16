import React, { useState } from "react";
import { BsPlusLg } from "react-icons/bs";
import Modal from "./Modal";

const AddProfileCard
 = () => {
  const [modal, setShowModal] = useState(false);
  return (
    <div className="rounded-lgPlus bg-white shadow-shadowFull border-2 p-4 flex justify-center items-center text-gray-400 w-full h-full">
      <div className="flex flex-col p-5 gap-2">
        <div
          className="border text-5xl flex justify-center rounded-full aspect-square items-center bg-gray-200 hover:cursor-pointer"
          onClick={() => {
            setShowModal(true);
          }}
        >
          <BsPlusLg />
        </div>
        <p>Add Profile</p>
      </div>
      {modal && <Modal setShowModal={setShowModal}  />}
    </div>
  );
};

export default AddProfileCard
;
