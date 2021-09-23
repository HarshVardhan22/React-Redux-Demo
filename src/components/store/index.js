import { createStore } from "redux";

//the reducer functions job is to take i/p of old state and Action method and o/p the new state
const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  }
  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
    };
  }
  return state;
};

//creating the central state/store to store all the data
//we should not the change the data of the store directly so we use REDUCER function to do that
const store = createStore(counterReducer);

export default store;
