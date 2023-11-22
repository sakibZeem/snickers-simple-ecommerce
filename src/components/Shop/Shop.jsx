
import { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../cart/Cart';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    },[]);

    useEffect(() => {
        const storedCart = getShoppingCart();
        console.log(storedCart);
    }, [])
    const handleAddToCart = (product) => {
       const newCart = [...cart, product];
       setCart(newCart);
       addToDb(product.id);
    }
    return (
        <div className='shop'>
            <div className='products'>
                {
                    products.map(product => <Product 
                        key={product.id}
                        product={product}
                        handleAddToCart = {handleAddToCart}></Product>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart= {cart} ></Cart>
            </div>
        </div>
    );
};

export default Shop;