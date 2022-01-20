import React from "react";

function MyList(props) {
  const fetchId = () => {
    const id = props.data.id;
    props.getDataId(id);
    
  };

  return (
    <div className="mt-5 border-2 p-1 rounded-3xl bg-zinc-900 relative">
      <li className="border-2 border-zinc-900 m-1 pb-10 rounded-full bg-gray-400 h-1">
        <span className="text-2xl">{props.data.username} |</span>

        <span className="text-sm text-opacity-70">
          {props.data.age} Years Old
        </span>
        <button
          className="border-2 rounded-xl absolute right-40 top-3 p-1 bg-amber-600"
          onClick={fetchId}
        >
          Delete
        </button>
      </li>
    </div>
  );
}

export default MyList;
