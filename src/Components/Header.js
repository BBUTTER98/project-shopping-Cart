import { Link } from "react-router-dom";
function Header(){
    return(
        <div className="header">
            <h1>
                IllegalPokemonTargs
            </h1>
            <ul>
                <li><Link to="/shop">shop</Link></li>
                <li><Link to="/shop-card">shopping cart</Link></li>
            </ul>
        </div>
    )
}
export default Header;