import React from 'react';
import "./Seafood.css"

const SeaFood = ({ seaFood, handleAddToCart }) => {
    const {strMealThumb, strMeal, idMeal} = seaFood
    return (
        <div className='seaFoodContainer'>
            <img src={strMealThumb} alt=""></img>
            <h3>{strMeal}</h3>
            <button onClick={()=> handleAddToCart(seaFood)} className='addBtn'>Add To Cart</button>
            
        </div>
    );
};

export default SeaFood;