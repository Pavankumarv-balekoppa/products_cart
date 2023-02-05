import { Link } from 'react-router-dom';
import './navbar.css'
const Navbar = () => {
    return ( 
        <div className="nav">
            <div className="logo ml-3">
                <h1>logo</h1>
            </div>
            <div className="content">
                {/* <a href="">Home</a>
                <a href="">Products</a>
                <a href="">Cart</a> */}
                <Link to="/">Home</Link>
                <Link to="/products">Products</Link>
                <Link to="/cart">Cart</Link>
            </div>
        </div>
     );
}
 
export default Navbar;