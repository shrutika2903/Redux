import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import  ReactDOM  from "react-dom/client";
import { Provider } from "react-redux";
import App from './App';
import UserReducer from "./UserReducer";
const store = configureStore({
    reducer: {
        users: UserReducer

    }
})

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
         <App />
        </Provider>
    </React.StrictMode>
)

export default main;