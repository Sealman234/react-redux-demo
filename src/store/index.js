import { createStore } from 'redux';

const initialState = {
  counter: 0,
  showCounter: true,
};

// Mutations, set initial State
const counterReducer = (state = initialState, action) => {
  if (action.type === 'INCREMENT') {
    return { counter: state.counter + 1, showCounter: state.showCounter };
  }

  if (action.type === 'INCREASE') {
    return {
      counter: state.counter + action.amount,
      showCounter: state.showCounter,
    };
  }

  if (action.type === 'DECREMENT') {
    return { counter: state.counter - 1, showCounter: state.showCounter };
  }

  if (action.type === 'TOGGLE') {
    return { counter: state.counter, showCounter: !state.showCounter };
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
