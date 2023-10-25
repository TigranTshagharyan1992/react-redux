import {addApiCustomerReducerAction} from "../reducer";

export const fetchCustomers = () => {
    return function (dispatch) {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => dispatch(addApiCustomerReducerAction({payload: json})))
    }
}