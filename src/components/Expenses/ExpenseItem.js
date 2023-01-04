//import React, { useState } from "react";
import React from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

// function ExpenseItem
const ExpenseItem = (props) => {
  //Create a new const which use the State of the title of props
  //const [title, setTile] = useState(props.title);

  // const clickHandler = () => {
  //   setTile("Updated");
  // };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">$ {props.amount}</div>
      </div>
      {/* <button onClick={clickHandler}>Change Title</button> */}
    </Card>
  );
};

export default ExpenseItem;
