// store.js
import { createStore } from "redux";

const initialState = {
  isLogIn: false, // Trạng thái ban đầu
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SUCCESS": // Khi hành động là SUCCESS
      return { ...state, isLogIn: true };
    case "FAILURE": // Khi hành động là FAILURE
      return { ...state, isLogIn: false };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
