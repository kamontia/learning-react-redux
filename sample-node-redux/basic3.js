const { createStore } = require("redux");

const initState = [];

function todoReducer(state = initState, action) {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          id: action.id,
          text: action.text
        }
      ];
    case "DELETE_TODO":
      return state.filter(todo => todo.id !== action.id);
    default:
      return state;
  }
}

const store = createStore(todoReducer);
store.subscribe(() => console.log(store.getState()));

console.log("ADD TODO");
store.dispatch({ type: "ADD_TODO", id: 1, text: "Todo_1" });
console.log("ADD TODO");
store.dispatch({ type: "ADD_TODO", id: 2, text: "Todo_2" });
console.log("ADD TODO");
store.dispatch({ type: "ADD_TODO", id: 3, text: "Todo_3" });

console.log("DELETE TODO");
store.dispatch({ type: "DELETE_TODO", id: 2 });
