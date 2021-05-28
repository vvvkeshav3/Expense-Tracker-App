import React, { useState } from 'react';
import ExpensesList from './ExpensesList';
import './Expenses.css';
import Card from '../UI/Card'; // Card works as a Wrapper Component
import ExpenseFilter from './ExpensesFilter';
const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState('2021');
  const filterChangeHandler = (year) => {
    setFilterYear(year);
  };
  console.log(props.items);

  const filterItems = props.items.filter(
    ({ date }) => date.getFullYear().toString() === filterYear
  );
  
  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filterYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesList items = {filterItems}/>
    </Card>
  );
};

export default Expenses;
