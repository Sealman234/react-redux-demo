import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = {
  counter: 0,
  showCounter: true,
};

const counterSlice = createSlice({
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
    // 加上 action 因為需要 payload
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const store = configureStore({
  reducer: counterSlice.reducer,
});

// const counterSubscriber = () => {
//   const latestState = store.getState();
//   console.log(latestState);
// };
// store.subscribe(counterSubscriber);

// store.dispatch({ type: 'INCREMENT' });
// store.dispatch({ type: 'DECREMENT' });

// counterSlice.actions.toggleCounter() 會回傳一個自動生成的 action 物件 => {type: 'some auto-generated unique identifier'}
// 因此我們可以導出 counterSlice.actions 物件去元件中做使用
export const counterActions = counterSlice.actions;

export default store;
