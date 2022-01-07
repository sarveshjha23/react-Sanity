import React from "react";

function List(props) {
  return (
    <div className="mt-11 bg-stone-800 p-2 rounded-lg absolute left-[310px] w-[920px]">
      {props.mylist.length == 0 ? (
        <div>No Content To show</div>
      ) : (
        props.mylist.map((item) => (
          <div className="border-2 border-zinc-900 m-1 rounded-full bg-gray-400 h-10">
            <span className="text-2xl">{item.username}</span>
            <span> </span>
            <span className="text-2xl">{item.age}</span>
          </div>
        ))
      )}
    </div>
  );
}

export default List;
