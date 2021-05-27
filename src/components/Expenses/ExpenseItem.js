// the props from the app.js is accessed here.
// each item with the array numbering is setup with each property of date , amount and title
// We split the date component so that we can keep the code lean
// We call prosp in the function in the ExpenseDate
// So we call that function here And use the ExpenseDate component and set the date as prop.date
// useState is a react hook helps to change the state of a item
// useState should be called directly on the function not in the nested fuction and not aboce the or below the function
// we will not assign values with = sign but we will assign values by calling useState
// first value is the value itself and the second value is the value to set to be updates
// title is =  to props.title
// setTitle is a function which we can later call to set a new title we call it anything the convention is imp
// always returns a array of 2 elements
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import { useState } from "react";
function ExpenseItem(props) {
  // function for the button handler called when event occurs
  const [title, setTitle] = useState(props.title);
  // prints 4 times as we are using it 4 times in Expenses
  console.log("ExpesneItem evaluated by React");
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">£{props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
