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
                <div className="buy">
                    <button onClick={()=>{
                        buy();
                    }}>Checkout</button>
                </div>
                <div className="clear-basket">
                    <button onClick={()=>{
                        clear();
                    }}>remove all</button>
                </div>
                <div className="sum">Sum for all:</div>
                <div className="sum-value">{sumPrice}$</div>
            </footer>
        </div>
    )
}
export default ShopCard;