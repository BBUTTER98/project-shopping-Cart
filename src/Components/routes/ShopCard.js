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
                <div className="sum">Sum for all: {sumPrice}</div>
                <div className="buy">
                    <button onClick={()=>{
                        buy();
                    }}>Buy</button>
                </div>
                <div className="clear-basket">
                    <button onClick={()=>{
                        clear();
                    }}>Clean Basket</button>
                </div>
                
            </footer>
        </div>
    )
}
export default ShopCard;