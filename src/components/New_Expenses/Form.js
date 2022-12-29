import React from "react";
import "./Form.css";
//import ExpenseItem from "./ExpenseItem";
// import Card from "../UI/Card";

const Form = (props) => {
  // const onChangeHandler = (event) => {
  //     console.log(event.target.value)
  // }

  const titleChangeHandler = (event) => {
    console.log(event.target.value);
  };

  const amountChangeHandler = (event) => {
    console.log(event.target.value);
  };

  const dateChangeHandler = (event) => {
    console.log(event.target.value);
  };

  return (
    <div className="new-expense__control">
      <form>
        <label>Date:</label>

        <input
          type="date"
          name="Date"
          min="2019-01-01"
          max="2022-12-31"
          onChange={dateChangeHandler}
        />
        <label>Title:</label>
        <input type="text" name="Title" onChange={titleChangeHandler} />
        <label>Amount:</label>
        <input
          type="number"
          name="Amount"
          min="0.01"
          step="0.01"
          onChange={amountChangeHandler}
        />
      </form>
    </div>
  );
};

export default Form;
