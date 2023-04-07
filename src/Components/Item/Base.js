import { Link } from "react-router-dom";
import photos from "../../Data/pokemonPhotos";
function Base(props){
    const pokemon = props.pokemonData;
    const {id, name, type, price} = pokemon;
    const classValue = `type ${type}`;
    return(
        <div key={id} className="shop-item">
                <h2>{name}</h2>
                <Link to={`/shop/${id}`}>
                    <img src={photos[id-1].path} alt={name} className="pokemon-shop"/>
                </Link>
                <div className={classValue}>{type}</div>
            <button className="buy-for" onClick={()=>{
                props.add(pokemon);
            }}>
                Add {price}$
            </button>
        </div>
    )
}
export default Base;