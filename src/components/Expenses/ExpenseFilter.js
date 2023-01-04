//import React, { useState } from "react";
import "./ExpenseFilter.css";

const ExpenseFilter = (props) => {
  //const [display = "", setDisplay] = useState("Filter by Year");
  //const display = "";
  const selectChangeHandler = (event) => {
    //setDisplay(event.target.value);
    props.onChangeFilter(event.target.value);
    //props.filteredYear = event.target.value;
    //console.log(props.entry.arr[0].date.getFullYear())

    // if (props.entry.arr[0].date.getFullYear() == event.target.value) {
    //   setDisplay("Filter by Year - True");
    // } else {
    //   setDisplay("Filter by Year - False");
    // }
  };
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label name="lbl">Filter By Year</label>
        <select value={props.selected} name="yr" onChange={selectChangeHandler}>
          <option value="2019">2019</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
