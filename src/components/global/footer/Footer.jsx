import React from 'react';
import './footer.css';

const PUBLIC_URL = process.env.PUBLIC_URL;

const Footer = () => {
    return(
        <div className="footer__container">
            <div className="footer__container--logo">
                <img alt='' src={PUBLIC_URL + './static/icons/eastCoastCollections.svg'} className="footer__logo"></img>
            </div>
            <div className="footer__container--text">
                <p className="footer__text">East Coast Collections</p>
                <p className="footer__text">Crafted with passion <a rel="noreferrer" target="_blank" href="https://samuelteigland.com">by Samuel Teigland.</a> © 2023</p>
            </div>
        </div>
    )
}

export default Footer;