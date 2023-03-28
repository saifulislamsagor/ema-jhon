import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const {cart} = props;

    let totalPrice = 0;
    let totaShipping = 0;
    for(const product of cart){
        totalPrice = totalPrice + product.price;
        totaShipping = totaShipping + product.shipping;
    }
    const tax = totalPrice*7/100;

    const grandTotal = totalPrice + totaShipping + tax;
    return (
        <div className='cart'>
            <h4>Order Summary</h4>
            <p>Selected Item:{cart.length}</p>
            <p>Total Price:${totalPrice}</p>
            <p>Shipping:${totaShipping}</p>
            <p>Tax:${tax.toFixed(2)} </p>
            <h6>Grand Total:${grandTotal.toFixed(2)} </h6>
        </div>
    );
};

export default Cart;