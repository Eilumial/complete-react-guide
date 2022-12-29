import "./ExpensePanel.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";

const ExpensePanel = (props) => {
  return (
    <Card className="expense-panel">
      {props.arr.map((entry) => (
        <ExpenseItem
          title={entry.title}
          amount={entry.amount}
          date={entry.date}
        ></ExpenseItem>
      ))}
      {/* <ExpenseItem
        title={props.arr[0].title}
        amount={props.arr[0].amount}
        date={props.arr[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.arr[1].title}
        amount={props.arr[1].amount}
        date={props.arr[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.arr[2].title}
        amount={props.arr[2].amount}
        date={props.arr[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={props.arr[3].title}
        amount={props.arr[3].amount}
        date={props.arr[3].date}
      ></ExpenseItem> */}
    </Card>
  );
};

export default ExpensePanel;
