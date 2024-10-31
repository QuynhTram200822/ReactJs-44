import { createStore } from "redux";
import Cookies from "js-cookie";

const initialState = {
  isLogIn: Cookies.get("login") === "true", // Trạng thái ban đầu
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SUCCESS": // Khi hành động là SUCCESS
      Cookies.set("login", "true");
      return { ...state, isLogIn: true };
    case "FAILURE": // Khi hành động là FAILURE
      Cookies.set("login", "false");
      return { ...state, isLogIn: false };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
