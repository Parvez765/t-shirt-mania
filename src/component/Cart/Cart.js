import React from 'react';

const Cart = ({  food, handleDelete }) => {
    const { strMeal } = food
    
    
    return (
        <div className='deleteBtn'>
            <li>{strMeal}</li>
            <button onClick={() => handleDelete (food)}>X</button>
        </div>
    );
};

export default Cart;