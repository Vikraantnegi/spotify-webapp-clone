import React, {useEffect, useState} from 'react';
import Login from './components/Login/Login';
import './App.css';
import {getTokenFromURL} from './utility/spotify';
import SpotifyWebAPI from 'spotify-web-api-js';
import SpotifyPlayer from './components/SpotifyPlayer/SpotifyPlayer';
import { useStateValue } from './utility/StateProvider';

const spotify = new SpotifyWebAPI();

function App() {
  const [{user, token}, dispatch] = useStateValue();

  useEffect(() => {
      const hash = getTokenFromURL();
      const accesstoken = hash.access_token;
      if(accesstoken){
        dispatch({
          type: 'SET_TOKEN',
          user: token,
        })
        spotify.setAccessToken(token);
        spotify.getMe()
          .then(res => {
            dispatch({
              type: 'SET_USER',
              user: res,
            })
          })
          .catch(error => console.log(error));
      }
      window.location.hash = ""; 
  }, []);

  return (
    <div className="Spotify-app">
    {
      token ? <SpotifyPlayer spotify={spotify} /> : <Login />
    }
    </div>
  );
}

export default App;
