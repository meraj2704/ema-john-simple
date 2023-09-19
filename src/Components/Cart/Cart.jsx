import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight, } from '@fortawesome/free-solid-svg-icons'
import './Cart.css'

const Cart = (props) => {
    const cart = props.cart;
    const handleClearCart = props.handleClearCart
    let total =0;
    let totalShipping =0
    let quantity =0;
    // console.log(cart);
    for(const product of cart)
    {
        product.quantity = product.quantity || 1;
        total = total + product.price * product.quantity;
        totalShipping = totalShipping + product.shipping;
        quantity = quantity + product.quantity;
    }
    const tax = total*7/100;
    const grandTotal = total + totalShipping + tax;
    // console.log(total)
    return (
        <div className='cart'>
            <h5 className='order-summary'>Order Summary</h5>
            <div className='o-s-info'>
                <p className='o-s-d'>Selected item : {quantity}</p>
                <p className='o-s-d'>Total price : ${total.toFixed(2)}</p>
                <p className='o-s-d'>Total shipping Charge : ${totalShipping}</p>
                <p className='o-s-d'>Total tax : ${tax.toFixed(2)}</p>
                <h6 className='g-t'>Grand total : ${grandTotal.toFixed(2)}</h6>
            </div>
            <div className='btn-container'>
                <button onClick={handleClearCart} className='btn-clear-cart'>
                    <span className='btn-text'>Clear Cart</span>
                </button>
                <button className='btn-review-order'><span className='btn-text'>Review Order</span> <FontAwesomeIcon icon={faArrowAltCircleRight} /></button>
            </div>
        </div>
    );
};

export default Cart;