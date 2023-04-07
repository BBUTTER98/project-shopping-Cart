import data from "../../Data/pokemon";
import Base from "../Item/Base";
function Shop(props){
    return(
        <div className="shop-container">
            {data.map((obj)=><Base key={obj.id} add={props.addItem} pokemonData={obj}/>)}
        </div>
    )
}
export default Shop;