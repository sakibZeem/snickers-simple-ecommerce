import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Product.css';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
const Product = (props) => {
    const { img, name, price, seller, ratings } = props.product;
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
                <button className='btn-cart'>Add To Cart <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon> </button>
            </div>
        </>
    );
};

export default Product;