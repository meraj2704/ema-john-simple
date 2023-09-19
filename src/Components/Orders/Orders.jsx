import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData, useRouteLoaderData } from 'react-router-dom';
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
                ></Cart>
            </div>
        </div>
    );
};

export default Orders;