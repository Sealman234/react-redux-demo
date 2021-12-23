import { createStore } from 'redux';

// Mutations, set initial State
const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === 'INCREMENT') {
    return { counter: state.counter + 1 };
  }
  if (action.type === 'DECREMENT') {
    return { counter: state.counter - 1 };
  }
  return state;
};

// Create Redux store
const store = createStore(counterReducer);

// Getters
const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};
store.subscribe(counterSubscriber);

// Actions
store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'DECREMENT' });

export default store;
