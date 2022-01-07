import React, { useState } from "react";
import Modal from "react-modal";

function Form(props) {
  const [user, setUser] = useState("");
  const [age, setAge] = useState(0);
  const [err, setErr] = useState("");
  const [open, setOpen] = useState(false);

  const onClickHandler = (event) => {
    if (!user || !age) {
      console.log("error");
      setOpen(true);
      setErr("Name and age cannot be blank");
    } else if (age < 0) {
      setOpen(true);
      setErr("Age cannot be negitive");
    } else {
      event.preventDefault();
      props.bringState(user, age);
    }
  };

  return (
    <div className="border-l-4 border-b-4  border-slate-800 justify-center p-5 mr-72 ml-72 flex-row rounded-full bg-myDark">
      <div>
        <label className=" p-4 text-xl text-white">Username</label>
        <input
          type="text"
          className="border-2 mb-3"
          onChange={(event) => {
            setUser(event.target.value);
          }}
        />
      </div>

      <div>
        <label className="p-4 text-xl text-white">Enter Age:</label>
        <input
          type="number"
          className="border-2 mb-3 "
          onChange={(event) => {
            setAge(event.target.value);
          }}
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
