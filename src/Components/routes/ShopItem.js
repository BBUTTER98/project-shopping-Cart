import data from "../../Data/pokemon";
import {useLocation} from "react-router-dom";
function ShopItem(){
    const currentUrl = useLocation().pathname;
    const arrayUrl = currentUrl.split('/');
    const currentId = arrayUrl[2];
    const { name, type, price, desc } = data[currentId-1];
    return(
        <div>
            <h1>{name}</h1>
            <h2>type:{type}</h2>
            <p>A little info about him: {desc}</p>
            <h3>price:{price}$</h3>
        </div>
    )
}
export default ShopItem;