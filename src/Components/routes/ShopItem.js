import data from "../../Data/pokemon";
import photos from "../../Data/pokemonPhotos";
import {useLocation} from "react-router-dom";
function ShopItem({addItem}){
    const currentUrl = useLocation().pathname;
    const arrayUrl = currentUrl.split('/');
    const currentId = arrayUrl[2];
    const id = currentId-1;
    const { name, type, price, desc } = data[id];
    const className = `type ${type}`;
    return(
        <div className="specific-shop-item">
            <div>
                <h1>{name}</h1>
                <div className="photo-container">
                    <img className="photo-desc" src={photos[id].path} alt={name} /> 
                </div>
                
                <h2 className={className}>{type}</h2>
                <div className="buy-info">
                    <h3>price:{price}$</h3>
                    <button className="buy-for" onClick={()=>{
                        addItem(data[id]);
                    }}>Add To basket</button>
                </div>
                
                
            </div>
            <div className="paragraph-container">
                <p>A little info about him: {desc}</p>
            </div>
            
            
        </div>
    )
}
export default ShopItem;