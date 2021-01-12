import React from 'react';
import './Body.css';
import '../../../styles/HelperStyles.css';
import Header from './Header/Header';

function Body({spotify}) {
    return (
        <div className="player-contentbody">
            <Header spotify={spotify} />
        </div>
    )
}

export default Body;
