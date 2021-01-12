import React from 'react';
import './SpotifyPlayer.css';
import SideBar from './SideBar/SideBar';
import Body from './Body/Body';
import Footer from './Footer/Footer';
import '../../styles/HelperStyles.css'

function SpotifyPlayer({spotify}) {
    return (
        <div className="spotify-player flexColumn">
            <div className="player-body flexRow">
                <SideBar />
                <Body spotify={spotify} />
            </div>
            <Footer spotify={spotify} />
        </div>
    )
}

export default SpotifyPlayer;
