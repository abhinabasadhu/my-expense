// we get an default event object automatically onChange prop
// this event object has a property value and target properties from there we can fetch the value with every key stroke
// to clear the values after add Enpense we use two way binding
// we set the Enetered value to empty on submit and add the value prop in the input html tag
// using state to store the entered value
// enteredTitle is initially empty so the usestate
// is set to empty "" which changes later on in the function

import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const [enteredDate, setEnteredDate] = useState("");

  const dateChangeHandller = (event) => {
    setEnteredDate(event.target.value);
  };

  const [enteredAmount, setEnteredAmount] = useState("");

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const sumbitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    // we execute the saveExpensehandler from the
    // NewExpense component where we use the ExpenseForm
    // and point it on the saveExpenseDataHandler
    // as we are passing function this is
    // the way to comunicate between children to parent moving up
    props.onSaveExpenseData(expenseData); // expenseData is passed as a arg and will be received as a param in the saveExpenseDataHandler
    // setting  the input labels empty once the form is submitted
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={sumbitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandller}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;

// valid alternative to the state change
// const [userInput , setUserInput] =useState({
//   enteredTitle = '',
//   enteredDate = '',
//   enteredAmount = ''
//  });
// const titleChangeHAnfler = () =>{
//  setUserInput((prevState) =>{
//  return { ... prevState, enteredTilte = event.target.value};
// }
// }
