const { createStore } = require("redux");

const initState = 0;

function counterReducer(state = initState, action) {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
}

const store = createStore(counterReducer);
store.subscribe(() => console.log("expired => " + store.getState()));

console.log("INCREMENT");
store.dispatch({ type: "INCREMENT" });
console.log("INCREMENT");
store.dispatch({ type: "INCREMENT" });
console.log("INCREMENT");
store.dispatch({ type: "INCREMENT" });

console.log("DECREMENT");
store.dispatch({ type: "DECREMENT" });
console.log("DECREMENT");
store.dispatch({ type: "DECREMENT" });
