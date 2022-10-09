import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import SeaFood from '../SeaFood/SeaFood';
import "./Home.css"

const Home = () => {
    const seaFoods = useLoaderData()
    const [cart, setCart] = useState([])
    // console.log(cart)

    useEffect(() => {
        setCart(JSON.parse(localStorage.getItem('food-cart')).newMeal || []) 
    }, [])
    

    const handleAddToCart = (strMeal) => {
        const newMeal = [...cart, strMeal]
        setCart(newMeal)
        localStorage.setItem("food-cart", JSON.stringify({newMeal}))
    }

    

    const handleDelete = (click) => {
        console.log("Clicked", click)
        // console.log(click, cart)
        let reaminingFood = cart.filter(p => p.idMeal !== click.idMeal)
        console.log("This is" ,reaminingFood)
        setCart(reaminingFood)
        localStorage.setItem('food-cart', JSON.stringify(reaminingFood))
    }
    // console.log("THis is Food" ,cart)
    return (
        <div>
            <h2>Welcome to Heaven Of Sea Food</h2>
            <div className='container'>
                <div className='foodContainer'>
                     {
                    (seaFoods.meals).map(seaFood => <SeaFood
                        key={seaFood.idMeal}
                        seaFood={seaFood}
                        handleAddToCart = {handleAddToCart}
                    ></SeaFood>)
                    }
               </div>
            <div className='cartContainer'>
                    <h2>Order Summary</h2>
                    <h2>Total Order: {cart.length}</h2>
                    {
                        cart.map(food => <Cart food={food} handleDelete = {handleDelete}></Cart>)
                   }
            </div>
            </div>
        </div>
    );
};

export default Home;