import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import Notification from "./components/common/notification/notification";
import { StoreProvider } from "easy-peasy";
import store from "./stores/global/store";
import notificationStore from "./stores/notification/notificationStore";

const StoreProviderOverride = StoreProvider as any;

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <StoreProviderOverride store={store}>
        <StoreProviderOverride store={notificationStore}>
          <Notification />
        </StoreProviderOverride>
        <App />
      </StoreProviderOverride>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
