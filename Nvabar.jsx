import {Link} from 'react-router-dom';


export default function Navbar() {
    return (
        <div>
            <h2>Logo</h2>
            <nav>
                <Link to ='/'> home</Link>
                <Link to ='/Cart'> Cart</Link>
                <Link to ='/Products'   > Products</Link>
            </nav>
        </div>
    );
}