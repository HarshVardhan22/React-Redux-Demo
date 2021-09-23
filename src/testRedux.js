//console.log(a);
const redux = require("redux");


//the reducer functions job is to take i/p of old state and Action method and o/p the new state
const counterReducer = (state={counter:0}, action) => {
  return {
    counter: state.counter + 1,
  };
};

//creating the central state/store to store all the data
//we should not the change the data of the store directly so we use REDUCER function to do that
const store = redux.createStore(counterReducer);


//subscriber will be executed every time the state changes
const counterSubscriber = () => {
   const latestState =  store.getState(); //gives the latest state
console.log(latestState)
}

store.subscribe(counterSubscriber);

//the dispatch method  
store.dispatch({type:''})

