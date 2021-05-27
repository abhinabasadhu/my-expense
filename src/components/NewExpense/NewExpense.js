import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";
const NewExpense = (props) => {
  // onSaveExpenseData is a our built property
  // we can name it howerver we want
  // it is a property which has a value
  // the value is a fuction
  // which can be called in the ExpenseForm component
  // enteredExpenseData is the param reveiced from
  // the ExpenseForm props.onSaveExpenseData(expenseData)
  // expenseData = enteredExpenseData.
  // trick is the pointer to a function
  const [isEditing , setEditing] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    console.log(expenseData);
    props.onAddExpense(expenseData);
    setEditing(false);
  };

  const stopEditinghandler = () =>{
    setEditing(false);
  }

  const startEditingHandlerr = () =>{
    setEditing(true);
  }

  return (
    <div className="new-expense">
    {!isEditing && <button onClick={startEditingHandlerr}>Add New Expense</button> }  
    {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditinghandler} /> }
    </div>
  );
};

export default NewExpense;
