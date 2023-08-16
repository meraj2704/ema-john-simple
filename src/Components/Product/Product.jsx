import React from 'react';
import './Product.css'

const Product = (props) => {
    const { img, name, price, seller, ratings } = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h6 className='product-name'>{name}</h6>
                <p className='product-price'>Price : ${price}</p>
                <p className='product-mr'>Manufacturer : {seller}</p>
                <p className='product-mr'>Rating : {ratings}</p>
            </div>
            <button className='product-btn'>Add to Cart</button>
        </div>
    );
};

export default Product;