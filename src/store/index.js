import { createStore } from 'redux';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  counter: 0,
  showCounter: true,
};

createSlice({
  name: 'counter',
  initialState: initialState,
  reducers: {
    // 現在不用帶 type 了，所以這邊不會用到 action
    increment(state) {
      state.counter++; // Redux Toolkit 會自動把它變成 immutable 的方式
    },
    decrement(state) {
      state.counter--;
    },
    // 加上 action 因為需要其他參數
    increase(state, action) {
      state.counter = state.counter + action.amount;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

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
