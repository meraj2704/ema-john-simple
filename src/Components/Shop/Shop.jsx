import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight, } from '@fortawesome/free-solid-svg-icons'
import './Shop.css'
import Product from '../Product/Product';

const Shop = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const [carts, setCart] = useState([])
    const handleAddToCart = (product) => {
        const newCarts = [...carts, product];
        setCart(newCarts);
    }
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
                <h5 className='order-summary'>Order Summary</h5>
                <div className='o-s-info'>
                    <p className='o-s-d'>Selected item : {carts.length}</p>
                    <p className='o-s-d'>Total price : $</p>
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

        </div>
    );
};

export default Shop;