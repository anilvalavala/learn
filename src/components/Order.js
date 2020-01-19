import React from 'react';

const Order = (props) => (
    <div>
        <h1>Order - {props.match.params.category} - {props.match.params.id}</h1>
    </div>
);

export default Order;