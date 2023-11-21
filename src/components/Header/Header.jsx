
import './Header.css'
import logo from '../../images/Logo.svg'
const Header = () => {
    return (
        <nav>
            <img src={logo} alt="" />
            <ul>
                <a href="/order">Order</a>
                <a href="/order-review">Order Review</a>
                <a href="/inventory">Mange Inventory</a>
                <a href="/login">Login</a>
            </ul>
        </nav>
    );
};

export default Header;