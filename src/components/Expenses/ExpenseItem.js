import React, { useState } from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

const ExpenseItem = (props) => {
  
  // useState() must be called inside of the component, we can not call it inside of handler or return
  const [title, setTitle] = useState(props.title);
  
  console.log('ExpenseItem evaluated by React');

  const clickHandler = () => {
    // or function clickHandler(){}
    setTitle('Updated!!!');
    console.log(title); // It will be a before value of title, because setTitle doesnot change it right now it is scheduled later.
    

  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
