import { useState } from "react";
import "./App.css";
import ExpenseItem from "./component/ExpenseItem/ExpenseItem";
import Expenses from "./component/Expenses/Expenses";
import NewExpense from "./component/NewExpense/NewExpense";
let DUMMY_EXPENSE = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [data, setData] = useState(DUMMY_EXPENSE);

  const onFinalSave = (expense) => {
    setData((prevState) => [expense, ...prevState]);
    data.map((item) => (item.date = new Date(item.date)));
    console.log("data type");
    console.log(data);
  };

  return (
    <div className="App">
      <h1>Expense Tracker 1.0.0</h1>

      <NewExpense onFinalHandler={onFinalSave} />

      <Expenses expenses={data} />
    </div>
  );
}

export default App;
