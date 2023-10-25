import logo from './logo.svg';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {addMoneyReducerAction,getMoneyReducerAction,addCustomerReducerAction,removeCustomerReducerAction} from "./reducer";
import {fetchCustomers} from "./api/getCustomers";

function App() {
  const dispatch = useDispatch();
  const cash = useSelector(state => state.moneyReducer.cash);
  const customers = useSelector(state => state.customerReducer.customers);

  const addCash = (cash) => {
      dispatch(addMoneyReducerAction({payload: cash}))
  }
  const getCash = (cash) => {
      dispatch(getMoneyReducerAction({payload: cash}))
  }
  const addCustomer = (name) => {
      const customer = {name:name, id: Date.now()}
        dispatch(addCustomerReducerAction({payload: customer}))
    }
  const removeCustomer = (id) => {
      dispatch(removeCustomerReducerAction({payload: id}))
  }
    const addCustomersAll = () => {
        dispatch(fetchCustomers())
    }
  return (
    <div className="App">
        <div style={{fontSize:"3rem"}}>{cash}</div>
        <div>
            <div>
                <button onClick={()=>addCash(Number(prompt()))}>add to balance</button>
                <button onClick={()=>getCash(Number(prompt()))}>take from balance</button>
            </div>
         <div>
             <button onClick={()=>addCustomer(prompt())}>add customer</button>
         </div>
            <div>
             <button onClick={()=>addCustomersAll()}>add customers all</button>
         </div>

        </div>
        {customers.length > 0 ?
            <div>
                {customers.map((customer)=>{

                    return <div key={customer.id}>
                        <span>{customer.name}</span>
                        <span onClick={()=>removeCustomer(customer.id)}>delete</span>
                    </div>
                })}
            </div> :
            <div style={{fontSize:"2rem",marginTop:20}}>
                There are no users
            </div>
        }
    </div>
  );
}

export default App;
