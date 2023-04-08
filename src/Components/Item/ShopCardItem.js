import photos from "../../Data/pokemonPhotos";
function ShopCardItem(props){
    const { information, increase, decrease, drop } = props;
    const { id, pokemonData, quantity } = information;
    const { name, type, price,} = pokemonData;
    const pokemonType = `shop-type type ${type}`;
    let sum = price*quantity;
    return  (
        <div className="shop-card-item">
            <div>
                <img src={photos[id-1].path} alt={name} className="basket-pokemon-icon" />
            </div>
            <div className="title">
                <div className="name">
                    {name}
                    </div>
                <div className="shop-type">
                    <div className={pokemonType}>
                    {type}
                    </div>
                </div>
                    
            </div>
            <div className="quantity-buttons">
                <button onClick={()=>{
                    decrease(id);
                }}>-</button>
                
                <div>
                    {quantity}
                </div>
                <button onClick={()=>{
                    increase(id);
                }}>+</button>
            </div>
            <div className="btn-remove">
                <button onClick={()=>{
                    drop(id,sum);
                }}>
                    Remove
                </button>
            </div>
            <div className="price">
                <p>{sum}$</p>
            </div>
           
           </div>
    )
}
export default ShopCardItem;