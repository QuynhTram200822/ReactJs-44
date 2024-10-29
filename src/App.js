// App.js
import React from "react";
import { Provider } from "react-redux";
import store from "./pages/store";
import ParentComponent from "./pages/ParentsComponents";

function App() {
  return (
    <Provider store={store}>
      <ParentComponent />
    </Provider>
  );
}

export default App;
