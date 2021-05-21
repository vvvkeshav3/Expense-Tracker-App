import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  // ***********Alternative****************
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: '',
  // });

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);

    // *************Alternative*************

    // setUserInput({
    //     ...userInput,
    //     enteredTitle : event.target.value
    // })
    // ***************if you are updating the state that
    // depends on the previous state then you should not do it
    // like this *******************
    // it works fine in most of the cases but it can
    // produce unexpected results because react schedules it.
    // if you schedules a lot of state updates at the same time
    // you could be depending on outdated or incorrect state snapshot
    // if you use this approach

    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });

    // But if you use this approach react will guarantee that the state
    // snapshot will always be the latest state snapshot keeping all
    // schedule updates in mind.
    // so You should use this function syntax whenever your
    // state update depends on the prev State
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) =>{

    event.preventDefault(); // built in JS (nothing to do with react)
    // it is the default behaviour in the browser that
    // if you do click the button of submit in form 
    // the page reloads because browser automatically sends 
    // request wheneven a form is submit to the server who is 
    // hosting this page

    const expenseData = {
      title : enteredTitle,
      amount : enteredAmount,
      date : new Date(enteredDate)
    };

    console.log(expenseData);
     
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
    // To change the form input back to empty

  }

  return (
    <form onSubmit={submitHandler}>
    {/* it is the better approach to use onSubmit here instead on a button */} 
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          {/* when we change the input it will also change the input contents */}
          {/* So we are listening the change and change the value of input as well this is called as 2-way binding  */}
          <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value = {enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value = {enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit" 
        // onClick={addExpenseHandler}
        // It is not the best approach
        // because there is a default behaviour built into browser and built into forms on web pages
        // that if the button especially with type Submit is pressed inside of the form 
        // then the form element will emit an event which we can listen***
        >
          Add Expense
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
