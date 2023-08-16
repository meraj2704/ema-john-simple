import React, { useEffect, useState } from 'react';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className='shop-container'>
            <div className='product-container'>
                <h1>This is product container</h1>
            </div>
            <div className='cart-container'>
                <h1>This is cart container</h1>
            </div>

        </div>
    );
};

export default Shop;