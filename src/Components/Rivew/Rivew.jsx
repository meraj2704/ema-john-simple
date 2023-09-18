import React from 'react';

const Rivew = ({product}) => {
    // console.log(cart);
    const {img, name, price, quantity} = product;
    return (
        <div className='rivew-item'>
            <img src={img} alt="" />
            <div>
                <h3>{name}</h3>
                <p>Price : <span className='price'>{price}$</span></p>
            </div>
        </div>
    );
};

export default Rivew;