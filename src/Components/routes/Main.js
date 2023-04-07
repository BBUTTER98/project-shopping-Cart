import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import ShopCard from "./ShopCard";
import Shop from "./Shop";
import { useState } from "react";
import Header from "../Header";
import ShopItem from "./ShopItem";
function MainComponent(){
    const[basket, setBasket] = useState([]);
    const[priceForAll, setPriceForAll] = useState(0);
    const isItemInBasket = (itemId) =>{
        let checker = 0;
        basket.map((obj)=>{
            if(obj.id === itemId){
               checker = 1;
            }  
        });
        if(checker===1){
            return true;
        }
        return false;
    }
    const increaseQuantity = (pokemonId) =>{
        let addable;
        setBasket(
            basket.map((obj)=>{
                addable = obj.pokemonData.price;
                if(obj.id === pokemonId){
                    return{
                        ...obj,
                        quantity: obj.quantity+1,
                    }
                } 
                return obj;
            })
        )
        setPriceForAll(priceForAll+addable);
    }
    const isQuantityZero = (pokemonId) =>{
        const checkedPokemon = basket.filter((obj)=>obj.id===pokemonId);
        if(checkedPokemon[0].quantity === 1){
            setBasket(basket.filter((obj)=>obj.id!==pokemonId));
        }
    }
    const decreaseQuantity = (pokemonId) =>{
        let removable;
        setBasket(
            basket.map((obj)=>{
                if(obj.id === pokemonId){
                    removable = obj.pokemonData.price;
                    return{
                        ...obj,
                        quantity: obj.quantity-1,
                    }
                } 
                return obj;
            })
        )
        isQuantityZero(pokemonId);
        setPriceForAll(priceForAll-removable);
    }
    const deleteItem = (id,sum) =>{
        setBasket(basket.filter((obj)=>obj.id!==id));
        setPriceForAll(priceForAll-sum);
        alert("item has been deleted");
    }
    const clearBasket = () =>{
            setBasket([]);
            setPriceForAll(0);
    }
    const buy = () =>{
        if(basket.length === 0){
            alert('No items to buy');
        }
        else{
            alert("you will get your pokemons for 2 minutes");
        }
        clearBasket();
    }
    const addItem = (pokemon) =>{
        const newObject = {id:pokemon.id,pokemonData:pokemon,quantity:1};
        if(!isItemInBasket(pokemon.id)){
            setBasket([...basket,newObject]);
        }
        else{
            increaseQuantity(pokemon.id);
        }
        setPriceForAll(priceForAll+pokemon.price);
        alert(`you added a pokemon to your basket, hope ${pokemon.name} will be yours`);
    }
    return(
        <HashRouter>
            <Header />
            <Routes>
                <Route path="/shop/:itemPokemonId" element={<ShopItem />}/>
                <Route path="/shop" exact element={<Shop addItem={addItem}/>}/>
                <Route path="/shop-card" exact element={<ShopCard items={basket} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity} sumPrice={priceForAll} clear={clearBasket} buy={buy} drop={deleteItem}/>}/>
                <Route path="/home-page" element={<Shop addItem={addItem}/>}/>
                <Route path="/" exact element={<Shop addItem={addItem}/>}/>
            </Routes>
        </HashRouter>
    )
}
export default MainComponent;