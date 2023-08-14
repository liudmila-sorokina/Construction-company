import React from "react";
import ReactDOM from "react-dom";
import { createStore } from 'redux'
import { Provider } from 'react-redux';


import App from "./components/App";
import "./scss/style.scss";

import { reducer } from "./reducers/reducer";

const el = document.getElementById("app");
const initialStore = {
  students: [],
  payments: [],
  courses: [],
}


const action = { type: 'ADD_STUDENT', payload: { name: 'Alexandrio', course: 2, friends: '10' } }

const addCourse = { type: 'ADD_COURSE', payload: { title: 'Redux', hourses: 300, members: '20' } }

const addPayments = { type: 'ADD_PAYMENT', payload: { name: 'Margaret', bill: 300, amount: 'cash' } }

const store = createStore(reducer, initialStore, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
console.log('STORE123: ', store)
store.dispatch(action)

store.dispatch(addPayments)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , el)
