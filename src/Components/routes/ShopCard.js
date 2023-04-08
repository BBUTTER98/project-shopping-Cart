import ShopCardItem from "../Item/ShopCardItem";
function ShopCard(props){
    const { items, increaseQuantity, decreaseQuantity, sumPrice, clear, buy, drop } = props;
    return(
        <div>
            <h1>Your basket</h1>

            
                
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