import React from "react";
import "./Expenses.css";
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import { useState } from "react";
import Card from "../Card/Card";
import ExpensesFilter from "../ExpenseFilter/ExpensesFilter";


function Expenses({ expenses }) {
  const [selected, setSelected] = useState("none");

  const reciveFilter = (year) => {
    setSelected(year);
  };

  let case1 = () => {
    return expenses
      .filter((item) => item.date.getFullYear() == selected)
      .map((item) => (
        <ExpenseItem
          key={item.id}
          title={item.title}
          amount={item.amount}
          date={item.date}
        />
      ));
  };

  let case2 = () => {
    return expenses.map((item) => (
      <ExpenseItem title={item.title} amount={item.amount} date={item.date} />
    ));
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter expFilter={reciveFilter} selected={selected} />
       
        {selected == "none" ? case2() : case1()}
      </Card>
    </div>
  );
}

export default Expenses;
