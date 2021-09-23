import classes from "./Counter.module.css";

//!the use of useSelector is :
//! 1. Fetching the a piece of state from store as in redux the store has all the states
//! in one place but we dont need the whole data
//! 2. It automatically assigns a SUBSCRIBER function to the component for the latest state
//!and when component is umnounted from dom the subscriber function is also removed from it


//! connect is used to implement the redux hooks in class based form
import { useSelector, useDispatch, connect } from "react-redux";

//for class based approach

//const Counter = () => {

// //!useDispatch returns the dispatch function which we can use to send actions to redux
// const dispatch = useDispatch();

// //!state => state.counter : means we need only the "counter" part of state from the store
// //!as of now only counter state is there but if there were a lots of states then it makes more sense
// const counter = useSelector(state => state.counter);

// const toggleCounterHandler = () => {};

// const incrementHandler = () => {
//   dispatch({type:'increment'});
// }

// const decrementHandler = () => {
//   dispatch({type:'decrement'});
// }

// return (
//   <main className={classes.counter}>
//     <h1>Redux Counter</h1>
//     <div className="btn">
//       <button onClick={incrementHandler}>Inc</button>
//       <button onClick={decrementHandler}> Dec</button>
//     </div>
//     <div className={classes.value}>{counter}</div>
//     <button onClick={toggleCounterHandler}>Toggle Counter</button>
//   </main>
// );
//};

// export default Counter;

//! *************** CLASS BASED IMPLEMENTATION**************


import { Component } from "react";

class Counter extends Component {

  incrementHandler() {
    this.props.increment();
  }

  decrementHandler() {
    this.props.decrement();
  }

  toggleCounterHandler() {}

  render() {
    return (
      <main className={classes.counter}>
        <h1>Redux Counter</h1>
        <div className="btn">
          <button onClick={this.incrementHandler.bind(this)}>Inc</button>
          <button onClick={this.decrementHandler.bind(this)}> Dec</button>
        </div>
        <div className={classes.value}>{this.props.counter}</div>
        <button onClick={this.toggleCounterHandler.bind(this)}>Toggle Counter</button>
      </main>
    );
  }
}

//! 1. useSelector alternative
const mapStateToProps = state => {
  return{
    counter : state.counter
  }
}

//! 2. useDipatch alternative
const mapDispatchToProps = dispatch => {
  return{
    //* the line below: Counter Componenthas a prop named increment
    //* that increment prop contains a function 
    //*when that function is executed the dispatch mehtod is called with action value  : "increment"
   increment: () => dispatch ({type:"increment"}),
   decrement: () => dispatch ({type:"decrement"})
  }
}


//! connect accepts two args : 1. useSelector alternative 2. useDipatch alternative
export default connect(mapStateToProps,mapDispatchToProps)(Counter);
