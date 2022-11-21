import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {applyMiddleware, compose, createStore} from "redux";
import { Provider } from 'react-redux';
import  PostReducer from './reducers/posts';
import thunk from "redux-thunk";
import "./index.css";

const store = createStore(PostReducer, compose(applyMiddleware(thunk)));
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
