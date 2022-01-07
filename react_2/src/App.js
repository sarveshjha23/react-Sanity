import "./App.css";
import { useState } from "react";
import Form from "./components/Form/Form";
import List from "./components/List/List";

let mylist = [{ username: "Sarvesh ", age: 23 }];

function App() {
  const [list, setList] = useState(mylist);

  const bringState = (user, age) => {
    setList([...list, { username: user, age: age }]);

    console.log(list);
  };

  return (
    <div className="App h-screen  bg-gradient-to-b from-violet-500 to-fuchsia-500">
      <div>
        <Form bringState={bringState} />
      </div>
      <List mylist={list} />
    </div>
  );
}

export default App;
