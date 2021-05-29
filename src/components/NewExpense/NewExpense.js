import React, { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
  const saveExpenseHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsShowForm(false);
  };

  const [isShowForm, setIsShowForm] = useState(false);

  const startShowFormHandler = () => {
    setIsShowForm(true);
  };

  const stopShowFormHandler = () => {
    setIsShowForm(false);
  };

  return (
    <div className="new-expense">
      {!isShowForm && (
        <button onClick={startShowFormHandler}>Add New Expense</button>
      )}
      {isShowForm && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseHandler}
          onCancel={stopShowFormHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
