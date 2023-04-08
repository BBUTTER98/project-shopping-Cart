import { Link } from "react-router-dom";
import photos from "../../Data/pokemonPhotos";
import { useState } from "react";
function Base(props){
    const pokemon = props.pokemonData;
    const {id, name, type, price} = pokemon;
    const classValue = `type ${type}`;
    const[inputValue,setInputValue] = useState(1);
    return(
        <div key={id} className="shop-item">
                <h2>{name}</h2>
                <Link to={`/shop/${id}`} className="container-for-image-hovering">
                    <img src={photos[id-1].path} alt={name} className="pokemon-shop"/>
                    <div className="hovered-div">Click to see more</div>
                </Link>
                <div className={classValue}>{type}</div>
                <div className="buy-inputs">
                    <button className="buy-for" onClick={()=>{
                        props.add(pokemon, parseInt(inputValue));
                    }}>
                    Add {price*inputValue}$
                    </button>
                    <input type="number" min='1' max='99' value={inputValue} onChange={(e)=>setInputValue(e.target.value)}/>
                </div>
            
        </div>
    )
}
export default Base;