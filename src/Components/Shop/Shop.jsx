import React, { useEffect, useState } from 'react';

import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';

const Shop = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const [cart, setCart] = useState([]);
    const handleAddToCart = (prod) => {
        // console.log(prod);
        const newCart = [...cart, prod];
        setCart(newCart);
        addToDb(prod.id);
    }
    useEffect(() => {
        const storeCart = getShoppingCart();
        const saveCart = [];
        for (const id in storeCart) {
            const addedCart = products.find(product => product.id === id);
            if (addedCart) {
                const quantity = storeCart[id];
                addedCart.quantity = quantity;
                saveCart.push(addedCart);
            }
        }
        setCart(saveCart);
    }, [products])
    return (
        <div className='shop-container'>
            <div className='product-container'>
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className='cart-container'>
                <Cart
                    cart={cart}
                ></Cart>
            </div>

        </div>
    );
};

export default Shop;