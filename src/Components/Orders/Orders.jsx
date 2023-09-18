import React from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData, useRouteLoaderData } from 'react-router-dom';
import Rivew from '../Rivew/Rivew';
import './Orders.css'
const Orders = () => {
    const cart = useLoaderData();
    // console.log(products);
    return (
        <div className='shop-container '>
            <div className='rivew-container'>
                {
                    cart.map(product => <Rivew
                    key = {product.id}
                    product = {product}
                    ></Rivew>)
                }
            </div>
            <div className='cart-container cart'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Orders;