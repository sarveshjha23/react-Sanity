import React from "react";
import "./ExpenseDate.css";

function ExpenseDate({ date }) {
  const dateData = new Date(date);
  const month = dateData.toLocaleString("en-US", { month: "long" });
  const Day = dateData.toLocaleString("en-US", { day: "2-digit" });
  const Year = dateData.getFullYear();
  return (
    <div className="expense-date">
      <div className="expense-date__day">{Day}</div>
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{Year}</div>
    </div>
  );
}

export default ExpenseDate;
