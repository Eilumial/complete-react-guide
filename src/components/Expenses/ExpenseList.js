import "./ExpenseList.css";
import React from "react";
import ExpenseItem from "./ExpenseItem";

const ExpensePanel = (props) => {
  let expensesContent = <p>No expenses found</p>;
  //console.log(props.expenses.length)
  //   if (props.expenses.length > 0) {
  //     expensesContent = props.expenses.map((expense) => (
  //       <div className="expenses-list">
  //         <ExpenseItem
  //           key={expense.id}
  //           title={expense.title}
  //           amount={expense.amount}
  //           date={expense.date}
  //         ></ExpenseItem>
  //       </div>
  //     ));
  //   }

  if (props.expenses.length > 0) {
    return (expensesContent = props.expenses.map((expense) => (
      <div className="expenses-list">
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        ></ExpenseItem>
      </div>
    )));
  } else {
    return <div className="expenses-list__fallback ">{expensesContent}</div>;
  }
};

export default ExpensePanel;
