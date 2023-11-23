
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
    }, []);

    useEffect( () => {
        const storedCart = getShoppingCart();
        const savedCart = [];
        // step 1: get id from stored cart
        for (const id in storedCart){
            //step 2: get product from products state using id
            const addedProduct = products.find(product => product.id === id);
            if(addedProduct){ 
                //useEffect load 2 times thats why need to give an conditional statement
                // step 3: add quantity to added product which is saved in local storage
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                // step 4: add the added product to saved cart
                savedCart.push(addedProduct);
            }
        }
        // step 5: set the cart
        setCart(savedCart);
    }, [products])

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
                        handleAddToCart={handleAddToCart}></Product>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart} ></Cart>
            </div>
        </div>
    );
};

export default Shop;