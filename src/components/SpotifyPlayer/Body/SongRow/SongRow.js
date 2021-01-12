import React from 'react'
import './SongRow.css';
import '../../../../styles/HelperStyles.css';

function SongRow({track}) {
    return (
        <div className="song-row flexRow flexAlignCenter">
            <img className="song-image" src={track.album.images[0].url} alt="song-img" />
            <div className="songrow-info">
                <h1>{track.name}</h1>
                <p>
                    {track.artists.map(artist => artist.name).join(', ')}
                    {track.album.name}
                </p>
            </div>
        </div>
    )
}

export default SongRow
