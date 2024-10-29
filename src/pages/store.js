// store.js
import { createStore } from "redux";

const initialState = {
  labelText: 0, // Trạng thái ban đầu
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT": // Khi hành động là INCREMENT
      return { ...state, labelText: state.labelText + 1 };
    case "DECREMENT": // Khi hành động là DECREMENT
      return { ...state, labelText: state.labelText - 1 };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
