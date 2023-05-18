import React from 'react';
import './home.css';
import Photos from './Photos.jsx';

const Home = () => {
    return(
        <div className="home__container">
            <div className="home__container--photos">
                <Photos />
            </div>
        </div>
    );
}

export default Home;