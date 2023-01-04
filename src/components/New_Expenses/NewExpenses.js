import "./NewExpenses.css";
//import ExpenseItem from "./ExpenseItem";
// import Card from "../UI/Card";
import Form from "./Form";

const NewExpenses = (props) => {
  const savedExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData, id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
  };
  return (
    <div className="new-expense">
      <Form onSaveExpenseData={savedExpenseDataHandler} />
    </div>
  );
};

export default NewExpenses;
