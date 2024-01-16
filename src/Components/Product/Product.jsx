import React from 'react';
import './Product.css'
import { Tilt } from 'react-tilt'

const Product = (props) => {
    const product = props.product;
    
    const { img, name, price, seller, ratings } = product;
    const handleAddToCart = props.handleAddToCart;
    // console.log(handleAddToCart)
    return (
            <div className='product'>
                <img src={img} alt="" />
                <div className='product-info'>
                    <h6 className='product-name'>{name}</h6>
                    <p className='product-price'>Price : ${price}</p>
                    <p className='product-mr'>Manufacturer : {seller}</p>
                    <p className='product-mr'>Rating : {ratings}</p>
                </div>
                <button className='product-btn' onClick={() => handleAddToCart(product)}>Add to Cart</button>
            </div>
    );
};

export default Product;