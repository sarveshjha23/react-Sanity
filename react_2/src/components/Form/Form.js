import React, { useState, useEffect, useRef } from "react";

import Modal from "react-modal";

function Form(props) {
  const [err, setErr] = useState("");
  const [open, setOpen] = useState(false);
  const userName = useRef();
  const userAge = useRef();

  const onClickHandler = (event) => {
    if (!userName.current.value.trim() || !userAge.current.value.trim()) {
      console.log("error");
      setOpen(true);
      setErr("Name and age cannot be blank");
    } else if (userAge.current.value < 0) {
      setOpen(true);
      setErr("Age cannot be negitive");
    } else {
      event.preventDefault();
      console.log(userAge);
      props.bringState(userName.current.value, userAge.current.value);
      userName.current.value = "";
      userAge.current.value = "";
    }
  };

  return (
    <div className="border-l-4 border-b-4  border-slate-800 justify-center p-5 mr-72 ml-72 flex-row rounded-full bg-myDark">
      <div>
        <label className=" p-4 text-xl text-white">Username</label>
        <input
          type="text"
          className="border-2 mb-3 w-44 rounded-lg"
          ref={userName}
        />
      </div>

      <div>
        <label className="p-4 text-xl text-white">Enter Age:</label>
        <input
          type="number"
          ref={userAge}
          min={1}
          max={100}
          className="border-2 mb-3 w-44 rounded-lg"
        />
      </div>
      <div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full "
          onClick={onClickHandler}
        >
          Add Info
        </button>
      </div>
      <div>
        <Modal
          isOpen={open}
          className="flex absolute w-96 h-28 left-[550px] top-10 justify-center bg-slate-900 rounded-3xl p-4"
        >
          <h3 className="text-xl text-white  ">{err}</h3>

          <button
            onClick={() => {
              setOpen(false);
            }}
            className="bg-orange-600 relative top-10 h-7 rounded-lg pr-2 pl-2 justify-center"
          >
            Cancel
          </button>
        </Modal>
      </div>
    </div>
  );
}

export default Form;
