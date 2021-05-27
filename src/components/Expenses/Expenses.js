// When we combine components we are using composition
// important part of it is the props.children feature which we learned in the Card.js
// using map we are rending the expense list
// key can be used in any component and if it is added it helps react identify this new item
// props.item is the array of expenses
// to get the filtered array according tot eh years
// we are simply getting the expense.date and compare it with user entered-Year
// the part before  &&  is true the part after  && is rendered
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
function Expenses(props) {
  const [enteredYear, setEnteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setEnteredYear(selectedYear);
  };
  const filteredExpenses = props.item.filter((expense) => {
    return expense.date.getFullYear().toString() === enteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={enteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses}/>
       <ExpensesList item ={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;
