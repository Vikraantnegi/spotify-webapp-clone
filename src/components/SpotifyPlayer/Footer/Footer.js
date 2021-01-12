import React, {useEffect} from 'react';
import './Footer.css';
import '../../../styles/HelperStyles.css';
import { PlayCircleOutline, SkipPrevious, SkipNext, Shuffle, Repeat, PlaylistPlay, VolumeDown } from '@material-ui/icons';
import { Grid, Slider } from '@material-ui/core';
import { useStateValue } from "./StateProvider";

function Footer({spotify}) {
    const [{ token, item, playing }, dispatch] = useStateValue();
    useEffect(() => {
        spotify.getMyCurrentPlaybackState().then((song) => {
          dispatch({
            type: "SET_PLAYING",
            playing: song.is_playing,
          });
    
          dispatch({
            type: "SET_ITEM",
            item: song.item,
          });
        });
      }, [spotify]);
    return (
        <div className="player-footer flexRow flexBetween">
            <div className="song-details flexRow flexAlignCenter flexBetween">
                <img src="" alt="album-cover" />
                <div className="song-info flexColumn">
                    <h4 className="song-name"></h4>
                    <p className="singer"></p>
                </div>

            </div>
            <div className="player-controls flexRow flexAlignCenter flexBetween">
                <Shuffle className="player-control-toggle-icon" />
                <SkipPrevious className="player-control-icon" />
                <PlayCircleOutline fontSize="large" className="player-control-icon" />
                <SkipNext className="player-control-icon" />
                <Repeat className="player-control-toggle-icon" />
            </div>
            <div className="volume-control flexRow flexAlignCenter flexBetween">
                <Grid container spacing={2}>
                    <Grid item>
                        <PlaylistPlay />
                    </Grid>
                    <Grid item>
                        <VolumeDown />
                    </Grid>
                    <Grid item xs>
                        <Slider />
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Footer;
