import React from 'react';
import './navBar.css';

const PUBLIC_URL = process.env.PUBLIC_URL;

const NavBar = () => {
    return (
        <header className="navBar__container">
            <div className="navBar__container--logo">
                <img alt='' src={PUBLIC_URL + './static/icons/eastCoastCollections.svg'} className="logo"></img>
            </div>
            <div className="navBar__container--menu">
                <label htmlFor="menu-input" className="menu-input-toggle">
                    <span></span>
                </label>
                <input type="checkbox" id="menu-input" className="menu-input"></input>
                <nav className='menu-container'>
                    <ul className="menu-items">
                        <li><a href="/cart">Cart</a></li>
                        <li><a href="/checkout">Checkout</a></li>
                        <li><a href="/contact">Contact Us!</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default NavBar;