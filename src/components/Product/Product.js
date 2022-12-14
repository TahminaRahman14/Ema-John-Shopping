    import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
    import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
    import React from 'react';
    import './Product.css'

    const Product = ({product,handleAddToCart}) => {
        const {name,img,seller,ratings,price} = product;
        return (
            <div className='product'>
                <img src= {img} alt="" />

                <div className='product-info'>
                <h3 className='product-name'>{name}</h3>
                <h4>Price: ${price}</h4>
                <p>Manifacturer:{seller}</p>
                <p>Ratings:{ratings}</p>

                </div>
                
            <button onClick= {() => handleAddToCart(product)} className='btn-cart'>
                <p className='btn-text'>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
            
            
            </div>
        );
    };

    export default Product;