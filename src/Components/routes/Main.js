import { Routes, Route, HashRouter } from "react-router-dom";
import ShopCard from "./ShopCard";
import Shop from "./Shop";
import { useState } from "react";
import Header from "../Header";
import ShopItem from "./ShopItem";
import Alert from "../alert/Alert";
function MainComponent(){
    const[basket, setBasket] = useState([]);
    const[priceForAll, setPriceForAll] = useState(0);
    const[alerts,setAlerts] = useState([
        {keyName:"add",status:false},
        {keyName:"drop",status:false},
        {keyName:"emptyBasket",status:false},
        {keyName:"emptyBuy",status:false},
        {keyName:"successBuy",status:false},
        {keyName:"successClear",status:false},
        {keyName:"badInput",status:false},
    ]);
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
    const increaseQuantity = (pokemonId, amount=1) =>{
        let addable;
        setBasket(
            basket.map((obj)=>{
                addable = obj.pokemonData.price;
                if(obj.id === pokemonId){
                    return{
                        ...obj,
                        quantity: parseInt(obj.quantity)+parseInt(amount),
                    }
                } 
                return obj;
            })
        )
        console.log("addable: "+addable);
        console.log("amout: "+amount);
        console.log("equals: "+addable*amount);
        console.log("price prev"+priceForAll);
        setPriceForAll(priceForAll+(addable*amount));
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
        showAlert("drop");
    }
    const clearSettings = () =>{
        setBasket([]);
        setPriceForAll(0);
    }
    const clearBasket = () =>{
            if(basket.length !== 0){
                clearSettings();
                showAlert("successClear");
            }
            else{
                showAlert("emptyBasket");
            }
    }
    const buy = () =>{
        if(basket.length === 0){
            showAlert("emptyBuy");
        }
        else{
            showAlert("successBuy");
        }
        clearSettings();
    }
    const addItem = (pokemon, quantityOfPokemons = 1) =>{
        if(isNaN(quantityOfPokemons)){
            showAlert("badInput");
        }
        else{
            if(quantityOfPokemons<=0){
                showAlert("badInput");
            }
            else{
        const newObject = {id:pokemon.id,pokemonData:pokemon,quantity:parseInt(quantityOfPokemons)};
        if(!isItemInBasket(pokemon.id)){
            setBasket([...basket,newObject]);
        }
        else{
            increaseQuantity(pokemon.id,quantityOfPokemons);
        }
        setPriceForAll(priceForAll+(pokemon.price*quantityOfPokemons));
        showAlert("add");
    }
    }
}
    const deleteAlert = () =>{
        setAlerts(alerts.map((obj)=>{
            return{
                ...obj,
                status: false,
            }
        }));
    }
    const deleteAlertOnClick = (key) =>{
        setAlerts(alerts.map((obj)=>{
            if(obj.keyName === key){
                return{
                    ...obj,
                    status: false,
                }
            }
            return obj;
        }));
        clearTimeout(deleteAlert);
    }
    const checkIfAlertIsShowed = () =>{
        document.querySelectorAll(".alert").forEach(element=>{
            if(element.style.display === "flex");
            return true;
        })
        return false;
    }
    const showAlert = (key) =>{
        if(checkIfAlertIsShowed){
            setAlerts(alerts.map((obj)=>{
                if(obj.keyName === key){
                    return{
                        ...obj,
                        status: true,
                    }
                }
                return obj;
            }));
            setTimeout(deleteAlert,5000);
        }}
    
    return(
        <HashRouter>
            <Header />
            <Routes>
                <Route path="/shop/:itemPokemonId" element={<ShopItem addItem={addItem} />}/>
                <Route path="/shop" exact element={<Shop addItem={addItem}/>}/>
                <Route path="/shop-card" exact element={<ShopCard items={basket} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity} sumPrice={priceForAll} clear={clearBasket} buy={buy} drop={deleteItem}/>}/>
                <Route path="/home-page" element={<Shop addItem={addItem}/>}/>
                <Route path="/" exact element={<Shop addItem={addItem}/>}/>
            </Routes>
            <Alert alertSpecific = {alerts[0]} message="Pokemon had been added to your basket" handleClick = {deleteAlertOnClick} type="add"/>
            <Alert alertSpecific = {alerts[1]} message="Item has been deleted from the basket" handleClick = {deleteAlertOnClick} type="success"/>
            <Alert alertSpecific = {alerts[2]} message="Cannot clear empty basket" handleClick = {deleteAlertOnClick} type="warning"/>
            <Alert alertSpecific = {alerts[3]} message="Your shopping cart is empty" handleClick = {deleteAlertOnClick} type="warning"/>
            <Alert alertSpecific = {alerts[4]} message="Order is in realization" handleClick = {deleteAlertOnClick} type="success"/>
            <Alert alertSpecific = {alerts[5]} message="Successfully cleared your basket" handleClick = {deleteAlertOnClick} type="success"/>
            <Alert alertSpecific = {alerts[6]} message="Please insert correct number (greater than 0)" handleClick = {deleteAlertOnClick} type="warning"/>
        </HashRouter>
    )
}
export default MainComponent;