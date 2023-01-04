import React, { useState } from "react";
import "./NewExpenses.css";
// import Grow from "@mui/material/Grow";
// import Button from '@mui/material/Button';
// import {redirect} from 'react-router-dom';

//import ExpenseItem from "./ExpenseItem";
// import Card from "../UI/Card";
import Form from "./Form";

const NewExpenses = (props) => {
  const [isHidden, setIsHidden] = useState(true);
  const savedExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    //setIsHidden(hidden);
  };

  const addExpensesClickHandler = () => {
    setIsHidden(false);
  };

  const cancelExpensesClickHandler = (hidden) => {
    //console.log(hidden);
    setIsHidden(hidden);
  };

  // const redirectHandler = () => {
  //   //useNavigate('/trial.js');
  //   return redirect("/trial.js");
  // }
  return (
    <div className="new-expense">
      {
        //Conditional Rendering &&
        //Only render the component inside && () only if the condition BEFORE && is TRUE
        isHidden && (
          <button onClick={addExpensesClickHandler}>Add Expenses</button>
        )
      }
      {
        //Ternary operator, conditon ? (component if true) : (component if false)
      !isHidden ? (
        <Form
          onSaveExpenseData={savedExpenseDataHandler}
          onCancelClick={cancelExpensesClickHandler}
        />
      ) : null}
    </div>
  );

  // if (isHidden) {
  //   return (
  //     <div className="new-expense">
  //       <button onClick={addExpensesClickHandler}>Add Expenses</button>
  //       {/* <Button variant="outlined" onClick={redirectHandler}>Test</Button> */}
  //     </div>
  //   );
  // } else {
  //   return (
  //     <div className="new-expense">
  //       {/* <Grow in={!isHidden}> */}
  //       <Form
  //         onSaveExpenseData={savedExpenseDataHandler}
  //         onCancelClick={cancelExpensesClickHandler}
  //       />
  //       {/* </Grow> */}
  //     </div>
  //   );
  // }
};

export default NewExpenses;
