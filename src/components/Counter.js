import classes from './Counter.module.css';

//!the use of this useSelector is : 
//! 1. Fetching the a piece of state from store as in redux the store has alll the states
//! in one place but we dont need the whole data
//! 2. It automatically assigns a SUBSCRIBER function to the component for the latest state 
//!and when component is umnounted from dom the subscriber function is also removed from it

import { useSelector } from 'react-redux';
const Counter = () => {

  //!state => state.counter : means we need only the "counter" part of state from the store
  //!as of now only counter state is there but if there were a lots of states then it makes more sense
  const counter = useSelector(state => state.counter);

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
