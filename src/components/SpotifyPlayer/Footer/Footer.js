import React, {useEffect} from 'react';
import './Footer.css';
import '../../../styles/HelperStyles.css';
import { PlayCircleOutline, SkipPrevious, SkipNext, Shuffle, Repeat, PlaylistPlay, VolumeDown } from '@material-ui/icons';
import { Grid, Slider } from '@material-ui/core';
import { useStateValue } from "./StateProvider";

function Footer({spotify}) {
    const [{ token, item, playing }, dispatch] = useStateValue();
    useEffect(() => {
        spotify.getMyCurrentPlaybackState().then((resp) => {
          dispatch({
            type: "SET_PLAYING",
            playing: resp.is_playing,
          });
    
          dispatch({
            type: "SET_ITEM",
            item: resp.item,
          });
        });
      }, [spotify]);
    
    const PlayPause = () => {
        if (playing) {
          spotify.pause();
          dispatch({
            type: "SET_PLAYING",
            playing: false,
          });
        } else {
          spotify.play();
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        }
    };
    
    const Next = () => {
        spotify.skipToNext();
        spotify.getMyCurrentPlayingTrack().then((resp) => {
          dispatch({
            type: "SET_ITEM",
            item: resp.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
    };
    
    const Previous = () => {
        spotify.skipToPrevious();
        spotify.getMyCurrentPlayingTrack().then((resp) => {
          dispatch({
            type: "SET_ITEM",
            item: resp.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
    };
    
      return (
        <div className="player-footer flexRow flexBetween">
            <div className="song-details flexRow flexAlignCenter flexBetween">
                <img src={item?.album.images[0].url} alt="album-cover" />
                { item ? (
                    <div className="song-info flexColumn">
                        <h4 className="song-name">{item.name}</h4>
                        <p className="singer">{item.artists.map((artist) => artist.name).join(", ")}</p>
                    </div>
                ) : (
                    <div className="song-info">
                        <h4>No song is playing</h4>
                        <p>...</p>
                    </div>
                )}
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
