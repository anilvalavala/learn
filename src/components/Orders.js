import React from 'react';
import { NavLink } from 'react-router-dom';

const Orders = (props) => {
    return(
        <div>
            <h1>Orders</h1>
            <NavLink to='/order/milk/1'>Order 1</NavLink>
            <NavLink to='/order/milk/2'>Order 2</NavLink>
        </div>
    );
};

export default Orders;