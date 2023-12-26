import React, { useState } from 'react';
import './Orders.css';
import Cart from '../cart/Cart';
import { useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import { removeFromDb } from '../../utilities/fakedb';

const Orders = () => {
    const savedCart = useLoaderData();
    const [cart, setCart] = useState(savedCart);

    const handleRemoveCart = (id) => {
        const remaining = cart.filter(product => product.id !== id);
        setCart(remaining);
        removeFromDb(id);
    }
    console.log(savedCart);
    return (
        <div className='shop'>
            <div className='review-container'>
                {
                    cart.map(product => <ReviewItem key={product.id} product={product} handleRemoveCart={handleRemoveCart}></ReviewItem>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart} ></Cart>
            </div>
        </div>     
    );
};

export default Orders;