import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  const [cancel, setCancel] = useState(false);
  const [temp, setTemp] = useState({
    title: "",
    amount: " ",
    date: new Date(),
  });

  const onCancel = (event) => {
    props.cancelHandler(true);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    props.onSaveExpense(temp);
  };

  return (
    <div>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            onChange={(event) => {
              setTemp((prevState) => ({
                ...prevState,
                title: event.target.value,
              }));
            }}
          />
          {console.log(temp.title)}
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={(event) => {
              setTemp({ ...temp, amount: event.target.value });
            }}
          />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            onChange={(event) => {
              setTemp({ ...temp, date: new Date(event.target.value) });
            }}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit" onClick={onSubmitHandler}>
          Add Expenses
        </button>
        <button onClick={onCancel}>Cancel</button>
      </div>
    </div>
  );
}

export default ExpenseForm;
