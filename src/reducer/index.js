import {combineReducers} from "redux";
const ADD_CASH = "ADD_CASH";
const GET_CASH = "GET_CASH";
const ADD_CUSTOMER = "ADD_CUSTOMER";
const REMOVE_CUSTOMER = "REMOVE_CUSTOMER";
const ADD_API_CUSTOMERS = "ADD_API_CUSTOMERS";
const moneyReducer = (state = {cash: 50000},action) => {
    switch (action.type) {
        case ADD_CASH:
            return {...state, cash: state.cash + action.payload}
        case GET_CASH:
            return {...state, cash: state.cash - action.payload}
        default:
            return state;
    }
}
export const addMoneyReducerAction = (action) =>{
    return {type: ADD_CASH, ...action};
}
export const getMoneyReducerAction = (action) =>{
    return {type: GET_CASH, ...action};
}
const customerReducer = (state = {customers: []},action) => {
    switch (action.type) {
        case ADD_CUSTOMER:
            return {...state, customers: [...state.customers, action.payload]}
        case ADD_API_CUSTOMERS:
            return {...state, customers: [...state.customers, ...action.payload]}
        case REMOVE_CUSTOMER:
            return {...state, customers: state.customers.filter(customer => customer.id !== action.payload)}
        default:
            return state;
    }
}
export const addCustomerReducerAction = (action) =>{
    return {type: ADD_CUSTOMER, ...action};
}
export const addApiCustomerReducerAction = (action) =>{
    return {type: ADD_API_CUSTOMERS, ...action};
}
export const removeCustomerReducerAction = (action) =>{
    return {type: REMOVE_CUSTOMER, ...action};
}
export const rootReducer = combineReducers({
     moneyReducer, customerReducer
})

