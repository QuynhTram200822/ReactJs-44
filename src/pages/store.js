import { createStore } from "redux";

const initialState = {
  isLogIn: localStorage.getItem("login") === "true", // Trạng thái ban đầu
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SUCCESS": // Khi hành động là SUCCESS
      localStorage.setItem("login", "true");
      return { ...state, isLogIn: true };
    case "FAILURE": // Khi hành động là FAILURE
      localStorage.setItem("login", "false");
      return { ...state, isLogIn: false };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
