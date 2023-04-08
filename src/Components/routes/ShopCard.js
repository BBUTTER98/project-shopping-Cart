import { Link } from "react-router-dom";
import ShopCardItem from "../Item/ShopCardItem";
import psyduck from "./Psyduck.png";
function ShopCard(props){
    const { items, increaseQuantity, decreaseQuantity, sumPrice, clear, buy, drop } = props;
    return(
        <div>
            <h1>Your basket</h1>

            <div className="empty-shoping-cart" style={{
                display: items.length===0 ? "grid" : "none"
            }}>
                <div className="title">
                    <h2>Your Pokemon shopping Cart is empty.</h2>
                    <p>Let's add something nice to it. <Link to='/shop'>Click here to start shopping</Link></p>
                </div>
                <div className="psyduck-photo"> 
                    <img src={psyduck} alt="psyduck" />
                </div>
            </div>
            <div>
            {items.map((obj)=> {
                return(
                    <ShopCardItem
                        key={obj.id}
                        information={obj}
                        increase= {increaseQuantity}
                        decrease = {decreaseQuantity}
                        drop={drop}
                    />
                )
            })}
            </div>
            
            <footer>
                <div className="clear-basket">
                    <button onClick={()=>{
                        clear();
                    }} disabled={items.length===0 ? true : false} style={{
                        cursor: items.length===0 ? "not-allowed" : "pointer"
                    }}>remove all</button>
                </div>
                <div className="buy">
                    <button onClick={()=>{
                        buy();
                    }} disabled={items.length===0 ? true : false} style={{
                        cursor: items.length===0 ? "not-allowed" : "pointer"
                    }}>Checkout</button>
                </div>
                <div className="sum">Total:</div>
                <div className="sum-value">{sumPrice}$</div>
            </footer>
        </div>
    )
}
export default ShopCard;