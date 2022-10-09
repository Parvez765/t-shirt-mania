import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';

const Order = () => {
    const [cart, setCart] = useState([])

     useEffect(() => {
        setCart(JSON.parse(localStorage.getItem('food-cart')).newMeal || []) 
     }, [])
    console.log(cart)
    
    // useEffect(() => {
    //     setCart(JSON.parse(localStorage.getItem('food-cart')).newMeal)
    //     console.log(JSON.parse(localStorage.getItem('food-cart')).newMeal)
    // }, [])
    
    const handleDelete = (click) => {
        console.log(click, cart)
        const reaminingFood = cart.filter(p => p.idMeal !== click.idMeal)
        setCart(reaminingFood)
        localStorage.setItem('food-cart', JSON.stringify(reaminingFood))
    }


    return (
        <div className='cartContainer'>
                    <h2>Order Summary</h2>
                    <h2>Total Order: {cart.length}</h2>
                    
                    {
                    cart.map(food => <Cart food={food} handleDelete={() => handleDelete(food)}></Cart>)
                    }
        </div>
    );
};

export default Order;