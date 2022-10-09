import React from 'react';
import { Link } from 'react-router-dom';
import "./Navigation.css"

const Navigation = () => {
    return (
        <div className='navItem'>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/order">Order</Link>
            <Link to="/contact">Contact</Link>
        </div>
    );
};

export default Navigation;