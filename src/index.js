import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {applyMiddleware, createStore} from "redux";
import {Provider} from "react-redux";
import {rootReducer} from "./reducer";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
