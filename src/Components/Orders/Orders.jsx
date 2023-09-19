import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight,faTrashCan,faCreditCard } from '@fortawesome/free-solid-svg-icons'
import { Link, useLoaderData, useRouteLoaderData } from 'react-router-dom';
import Rivew from '../Rivew/Rivew';
import './Orders.css'
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
const Orders = () => {
    const saveCart = useLoaderData();
    const [carts, setCart] = useState(saveCart);
    // console.log(products);
    const removeCart = id => {
        const remaining = carts.filter(cart => cart.id != id);
        console.log(remaining);
        setCart(remaining);
        removeFromDb(id);
        console.log(id);
    }
    const handleClearCart = ()=>{
        setCart([]);
        deleteShoppingCart();
    }
    return (
        <div className='shop-container '>
            <div className='rivew-container'>
                {
                    carts.map(product => <Rivew
                        key={product.id}
                        product={product}
                        removeCart={removeCart}
                    ></Rivew>)
                }
            </div>
            <div className='cart-container cart'>
                <Cart 
                cart={carts}
                handleClearCart = {handleClearCart}
                >
                    <Link to="/checkout">
                    <button className='btn-review-order'><span className='btn-text'>Proceed Checkout</span> <span><FontAwesomeIcon icon={faCreditCard} /></span></button>
                </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Orders;