import React, { useState } from "react";
import "./Form.css";
//import ExpenseItem from "./ExpenseItem";
// import Card from "../UI/Card";

const Form = (props) => {
  // const onChangeHandler = (event) => {
  //     console.log(event.target.value)
  // }
  //  enteredTitle - the Var used to store the value
  // setEnteredTitle - Method to set the current value of the input into the var
  const [enteredTitle, setEnteredTitle] = useState(""); //useState sets the default value of the field
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });

  const titleChangeHandler = (event) => {
    //console.log(event.target.value);
    setEnteredTitle(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });
    // setUserInput((prevState) => {
    //   return {...prevState, enteredTitle: event.target.value }
    // })
  };

  const amountChangeHandler = (event) => {
    // console.log(event.target.value);
    setEnteredAmount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });
    // setUserInput((prevState) => {
    //   return {...prevState, enteredAmount: event.target.value }
    // })
  };

  const dateChangeHandler = (event) => {
    // console.log(event.target.value);
    setEnteredDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    //console.log(expenseData);
    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
    props.onCancelClick(true);
  };

  const cancelHandler = () => {
    props.onCancelClick(true);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={cancelHandler}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>

    //   <div className=".new-expense__controls">
    //         <div className="new-expense__control">
    //           <label>Date:</label>

    //           <input
    //             type="date"
    //             name="Date"
    //             min="2019-01-01"
    //             max="2022-12-31"
    //             onChange={dateChangeHandler}
    //           />
    //           <label>Title:</label>
    //           <input type="text" name="Title" onChange={titleChangeHandler} />
    //           <label>Amount:</label>
    //           <input
    //             type="number"
    //             name="Amount"
    //             min="0.01"
    //             step="0.01"
    //             onChange={amountChangeHandler}
    //           />
    //         </div>
    //       </div>
  );
};

export default Form;
