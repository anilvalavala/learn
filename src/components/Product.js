import React from 'react';

const Product = (props) => (
    <div className='productContainer'>
        <div className='productContainer__InfoContainer'>
            <div className='productContainer__InfoDiv'>Product:</div> 
            <div className='productContainer__InfoDiv'>{props.name}</div>
        </div>
        <div className='productContainer__InfoContainer'>
            <div className='productContainer__InfoDiv'>Quantity:</div> 
            <div className='productContainer__InfoDiv'>{props.quantity}</div>
        </div>
        <div className='productContainer__InfoContainer'>
            <div className='productContainer__InfoDiv'>Price:</div> 
            <div className='productContainer__InfoDiv'>{props.price}</div>
        </div>
        <div className='productContainer__InfoContainer'>
            <div className='productContainer__InfoDiv'>Description:</div> 
            <div className='productContainer__InfoDiv'>{props.description}</div>
        </div>
    </div>
);

export default Product;