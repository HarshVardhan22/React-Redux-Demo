import classes from './Counter.module.css';

//!the use of useSelector is : 
//! 1. Fetching the a piece of state from store as in redux the store has alll the states
//! in one place but we dont need the whole data
//! 2. It automatically assigns a SUBSCRIBER function to the component for the latest state 
//!and when component is umnounted from dom the subscriber function is also removed from it

import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {

  //!useDispatch returns the dispatch function which we can use to send actions to redeux
  const dispatch = useDispatch();


  //!state => state.counter : means we need only the "counter" part of state from the store
  //!as of now only counter state is there but if there were a lots of states then it makes more sense
  const counter = useSelector(state => state.counter);

  const toggleCounterHandler = () => {};

  const incrementHandler = () => {
    dispatch({type:'increment'});
  }

  const decrementHandler = () => {
    dispatch({type:'decrement'});
  }


  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className="btn">
        <button onClick={incrementHandler}>Inc</button>
        <button onClick={decrementHandler}> Dec</button>
      </div>
      <div className={classes.value}>{counter}</div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
