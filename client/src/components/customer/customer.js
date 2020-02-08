import React, {useState, useEffect} from 'react';
import './customer.css';

function Customer() {
    const [customers, setCustomers]=useState([]);
    const [page,setPage]= useState(0);


    useEffect(() => {
        fetch('api/customers').then(res => res.json()).then(data=> setCustomers(data));

    },[page]);
  return (
    <div>
       
      <h2>Customers List</h2>
      <ul>
          {customers.map(customer => 
            
            <li key={customer.id}>{customer.name} </li>
            )}
      </ul>
    </div>
  );

}

export default Customer;
