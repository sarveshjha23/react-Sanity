import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
import { useState } from "react";

function NewExpense(props) {
  const [btn, setBtn] = useState(true);
  const buttonClickHandler = () => {
    setBtn(!btn);
  };

  const saveExpenseDataHandler = (formData) => {
    console.log(formData);

    props.onFinalHandler(formData);
  };

  const cancelHandler = (val) => {
    setBtn(val);
  };

  return (
    <div className="new-expense">
      {btn ? (
        <button onClick={buttonClickHandler}>Add Expenses</button>
      ) : (
        <ExpenseForm
          onSaveExpense={saveExpenseDataHandler}
          cancelHandler={cancelHandler}
        />
      )}
      {console.log(btn)}
    </div>
  );
}

export default NewExpense;
