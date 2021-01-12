import React from 'react';
import './Body.css';
import '../../../styles/HelperStyles.css';
import Header from './Header/Header';
import { useStateValue } from '../../../utility/StateProvider';
import { PlayCircleFilled, Favorite, MoreHoriz } from '@material-ui/icons';
import SongRow from './SongRow/SongRow';

function Body({spotify}) {
    const [{single_playlist}, dispatch] = useStateValue(); 
    return (
        <div className="player-contentbody">
            <Header spotify={spotify} />
            <div className="body-info flexRow flexEnd">
                <img className="album-card-image" src={single_playlist?.images[0]?.url} alt="album-card" />
                <div className="body-text">
                    <strong>PLAYLIST</strong>
                    <h2>{single_playlist?.name}</h2>
                    <p>{single_playlist?.description}</p>
                </div>
            </div>
            <div className="songs_list">
                <div className="list-icons flexRow flexAlignCenter">
                    <PlayCircleFilled className="body-shuffle" />
                    <Favorite fontSize="large" />
                    <MoreHoriz /> 
                </div>
                {single_playlist?.tracks.items.map(track => (
                    <SongRow track={track.track} />
                ))}
            </div>
        </div>
    )
}

export default Body;
