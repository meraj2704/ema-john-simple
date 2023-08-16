import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight, } from '@fortawesome/free-solid-svg-icons'
import './Cart.css'

const Cart = (props) => {
    const cart = props.cart;
    let total =0;
    for(const product of cart)
    {
        total = total + product.price;
    }
    // console.log(total)
    return (
        <div className='cart'>
            <h5 className='order-summary'>Order Summary</h5>
            <div className='o-s-info'>
                <p className='o-s-d'>Selected item : {cart.length}</p>
                <p className='o-s-d'>Total price : ${total}</p>
                <p className='o-s-d'>Total shiping Charge : $</p>
                <p className='o-s-d'>Total tax : $</p>
                <h6 className='g-t'>Grand total : $</h6>
            </div>
            <div className='btn-container'>
                <button className='btn-clear-cart'>
                    <span className='btn-text'>Clear Cart</span>
                </button>
                <button className='btn-review-order'><span className='btn-text'>Review Order</span> <FontAwesomeIcon icon={faArrowAltCircleRight} /></button>
            </div>
        </div>
    );
};

export default Cart;