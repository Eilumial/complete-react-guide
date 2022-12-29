import "./NewExpenses.css";
//import ExpenseItem from "./ExpenseItem";
// import Card from "../UI/Card";
import Form from "./Form";

const NewExpenses = (props) => {
  return (
    <div className="new-expense">
      <Form />
      <button>Add</button>
    </div>
  );
};

export default NewExpenses;
