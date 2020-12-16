import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import "./index.css";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import store from "./Components/Redux/Store";


serviceWorker.register();

ReactDOM.render(
  <Router >
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </Router>,
  document.getElementById("root")
);
