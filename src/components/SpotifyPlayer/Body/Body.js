import React from 'react';
import './Body.css';
import '../../../styles/HelperStyles.css';
import Header from './Header/Header';

function Body({spotify}) {
    return (
        <div className="player-contentbody">
            <Header spotify={spotify} />
            <div className="body-info flexRow flexEnd">
                <img className="album-card-image" src="" alt="album-card" />
                <div className="body-text">
                    <strong>PLAYLIST</strong>
                    <h2>Discover Weekly</h2>
                    <p>Description</p>
                </div>
            </div>
        </div>
    )
}

export default Body;
