import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createStore} from "redux";
import {Provider} from "react-redux";


const reducer = (state = {cash: 50000},action) => {
    switch (action.type) {
        case "ADD_CASH":
                return {...state, cash: state.cash + action.payload}
        case "GET_CASH":
                return {...state, cash: state.cash - action.payload}
        default:
            return state;
    }

}

const store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
