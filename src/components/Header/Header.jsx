import "./Header.css";
import logo from "../../images/Logo.svg";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <nav>
      <img src={logo} alt="" />
      <ul>
        <Link to="/">Shop</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/inventory">Inventory</Link>
        <Link to="/login">Login</Link>
      </ul>
    </nav>
  );
};

export default Header;
