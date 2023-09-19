import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight, faTrashCan } from '@fortawesome/free-solid-svg-icons'

const Rivew = ({ product,removeCart }) => {
    // console.log(cart);
    const { img, name, price, quantity,id } = product;
    return (
        <div className='rivew-item'>
            <img src={img} alt="" />
            <div className='rivew-details'>
                <h3>{name}</h3>
                <p>Price : <span className='price'>{price}$</span></p>
                <p>Quantity : <span className='price'>{quantity}</span></p>
            </div>
            <button onClick={()=>removeCart(id)} className='remove'><FontAwesomeIcon className='icon' icon={faTrashCan} /></button>
        </div>
    );
};

export default Rivew;