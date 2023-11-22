
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
const Product = (props) => {
    const { img, name, price, seller, ratings } = props.product;
    const handleAddToCart = props.handleAddToCart;
    return (
        <>
            <div className='product'>
                <div><img src={img} alt="loading failed" /></div>
                <div className='product-details'>
                    <h6> {name} </h6>
                    <p>Price: ${price} </p>
                    <p>Manufacturer: {seller} </p>
                    <p>Ratings: {ratings} star </p>
                </div>
                <button className='btn-cart' onClick={() => handleAddToCart(props.product)}>Add To Cart <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon> </button>
            </div>
        </>
    );
};

export default Product;