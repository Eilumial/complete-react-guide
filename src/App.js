//import logo from "./logo.svg";
//import "./App.css";
import ExpensePanel from "./components/Expenses/ExpensePanel";
import NewExpenses from "./components/New_Expenses/NewExpenses.js";

function App() {
  const expenses = [
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
  return (
    <div>
      {/* <h2>Welcome to React Session</h2> */}
      <NewExpenses/>
      <ExpensePanel arr={expenses} />
      
    </div>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
