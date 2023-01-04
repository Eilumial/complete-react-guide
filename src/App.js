//import logo from "./logo.svg";
//import "./App.css";
import React, { useState } from "react";
import ExpensePanel from "./components/Expenses/ExpensePanel";
import NewExpenses from "./components/New_Expenses/NewExpenses.js";


//Default set of expenses
const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "TV",
    amount: 1000,
    date: new Date(2020, 6, 14),
  },
  {
    id: "e2",
    title: "New TV",
    amount: 800,
    date: new Date(2021, 7, 9),
  },
  {
    id: "e3",
    title: "Speaker",
    amount: 250,
    date: new Date(2020, 0, 1),
  },
  {
    id: "e4",
    title: "Car Insurance",
    amount: 500,
    date: new Date(2022, 11, 28),
  },
];

function App() {
  //set up expenses var to useState, start with DUMMY_EXPENSES
  //But allow editing with setExpenses method
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  // const expenses = [
  //   {
  //     id: "e1",
  //     title: "TV",
  //     amount: 1000,
  //     date: new Date(2020, 6, 14),
  //   },
  //   {
  //     id: "e2",
  //     title: "New TV",
  //     amount: 800,
  //     date: new Date(2021, 7, 9),
  //   },
  //   {
  //     id: "e3",
  //     title: "Speaker",
  //     amount: 250,
  //     date: new Date(2020, 0, 1),
  //   },
  //   {
  //     id: "e4",
  //     title: "Car Insurance",
  //     amount: 500,
  //     date: new Date(2022, 11, 28),
  //   },
  // ];
  const changeFilteredYearHandler = (selectedYear) => {
  
    // console.log(selectedYear);

    // const newExpenses = expenses.filter(expense =>{
    //   return expense.date.getFullYear().toString()===selectedYear.toString();
    // })
    // setExpenses(newExpenses);
    

    

    // for(let exp in newExpenses){
    //   //console.log(newExpenses[exp].date.getFullYear().toString())
    //   console.log(selectedYear.toString())
    //   if(newExpenses[exp].date.getFullYear().toString()!==selectedYear.toString()){
    //     console.log(newExpenses[exp]);
    //   }
    // }

  };

  const addExpenseHandler = (expense) => {

    setExpenses((prevExpenses) => {

      //Return a combined list of expense + prevExpenses
      //... to "extract" the contents of the prevExpenses array
      //Adds to top of expenses list
      return [expense, ...prevExpenses];

      //Adds to end of expenses list
      //return [...prevExpenses, expense];
    });

    // expenses.push({
    //   id: expense.id,
    //   title: expense.title,
    //   amount: expense.amount,
    //   date: expense.date,
    // })
    //console.log(expenses);
  };
  return (
    <div>
      {/* <h2>Welcome to React Session</h2> */}
      <NewExpenses onAddExpense={addExpenseHandler} />
      <ExpensePanel changeFilterYear={changeFilteredYearHandler} arr={expenses} />
    </div>
  );
}

export default App;
