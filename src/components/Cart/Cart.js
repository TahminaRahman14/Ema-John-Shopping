import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Cart.css';
const Cart = ({cart,RemoveCart}) => {

    console.log(cart);

    let total = 0;
    let shipping = 0;


    for(const product of cart){

        total = total + product.price;
        shipping = shipping + product.shipping;
         
    }

    const tax = parseFloat((total*0.1).toFixed(2));
    const grandTotal = total + shipping + tax;
    return (
        <div className='cart'>
            
            <h2>Order Summary</h2>

            <div className='cart-text'>
                <p>Selected item: {cart.length}</p>
                <p>Total Price: ${total}</p>
                <p>Total Shipping charge: ${shipping}</p>
                <p>Tax: ${tax}</p>
                <h3>Grand Total: {grandTotal}</h3>
            </div>

            <button onClick={RemoveCart} className='clear-cart'>
                <p>Clear Cart</p>
                <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
            </button>

            

        </div>
    );
};

export default Cart;