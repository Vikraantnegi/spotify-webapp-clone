import React, {useEffect, useState} from 'react';
import Login from './components/Login/Login';
import './App.css';
import {getTokenFromURL} from './utility/spotify';
import SpotifyWebAPI from 'spotify-web-api-js';
import SpotifyPlayer from './components/SpotifyPlayer/SpotifyPlayer';

const spotify = new SpotifyWebAPI();

function App() {
  const [token, setToken] = useState('');

  useEffect(() => {
      const hash = getTokenFromURL();
      const token = hash.access_token;
      if(token){
        setToken(token);
        spotify.setAccessToken(token);
        spotify.getMe()
          .then(res => {
            console.log(res);
          })
          .catch(error => console.log(error));
      }
      window.location.hash = "";
  }, [])
  return (
    <div className="Spotify-app">
    {
      token ? <SpotifyPlayer /> : <Login />
    }
    </div>
  );
}

export default App;
