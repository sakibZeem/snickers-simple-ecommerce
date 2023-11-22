import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Cart.css';
import { faArrowRightLong, faRemove } from '@fortawesome/free-solid-svg-icons';

const Cart = () => {
    
    return (
        <div className='cart'>
            <h5>Order Summary</h5>
            <p>Selected Items: </p>
            <p>Total Price: $</p>
            <p>Tax: $</p>
            <h6>Grand Total: $</h6>
            <div>
                <button className='btn'>Clear Cart <FontAwesomeIcon icon={faRemove}></FontAwesomeIcon></button>
                <button className='btn'>Order Review <FontAwesomeIcon icon={faArrowRightLong}></FontAwesomeIcon></button>
            </div>
        </div>
    );
};

export default Cart;