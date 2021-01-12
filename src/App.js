import React, {useEffect, useState} from 'react';
import Login from './components/Login/Login';
import './App.css';
import {getTokenFromURL} from './utility/spotify';
import SpotifyWebAPI from 'spotify-web-api-js';
import SpotifyPlayer from './components/SpotifyPlayer/SpotifyPlayer';
import { useStateValue } from './utility/StateProvider';

const spotify = new SpotifyWebAPI();

function App() {
  const [{ token}, dispatch] = useStateValue();

  useEffect(() => {
      const hash = getTokenFromURL();
      const accesstoken = hash.access_token;
      if(accesstoken){
        spotify.setAccessToken(accesstoken);
        dispatch({
          type: 'SET_TOKEN',
          token: accesstoken,
        })
        spotify.getMe()
          .then(res => {
            dispatch({
              type: 'SET_USER',
              user: res,
            })
          })

        spotify.getUserPlaylists()
          .then(playlists => {
            dispatch({
              type: 'SET_PLAYLIST',
              playlist: playlists
            })
          })
        
        spotify.getMyTopArtists().then((response) =>
          dispatch({
            type: "SET_TOP_ARTISTS",
            top_artists: response,
          })
        );
        
          dispatch({
            type: "SET_SPOTIFY",
            spotify: spotify,
          });

        spotify.getPlaylist("37i9dQZEVXcJZyENOWUFo7").then((response) =>
          dispatch({
            type: "SET_DISCOVER_WEEKLY",
            discover_weekly: response,
          })
        );

        spotify.getPlaylist('5UP5N95ux4S7ZQ7lz6TsQt')
          .then(resp => {
            dispatch({
              type: 'SET_SINGLEPLAYLIST',
              single_playlist: resp
            })
          })
      }
      window.location.hash = ""; 
  }, [token, dispatch]);

  return (
    <div className="Spotify-app">
    {
      token ? <SpotifyPlayer spotify={spotify} /> : <Login />
    }
    </div>
  );
}

export default App;
