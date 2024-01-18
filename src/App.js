// App.js
import React from "react";
import { Provider } from "react-redux";
import IncreDecre from "./component/IncreDecre";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div>
        <IncreDecre />
      </div>
    </Provider>
  );
}

export default App;
