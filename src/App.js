import React, {useEffect, useState} from 'react';
import Login from './components/Login/Login';
import './App.css';
import {getTokenFromURL} from './utility/spotify';
import SpotifyWebAPI from 'spotify-web-api-js';

const spotify = new SpotifyWebAPI();

function App() {
  const [token, setToken] = useState('');

  useEffect(() => {
      const hash = getTokenFromURL();
      const token = hash.access_token;
      if(token){
        setToken(token);
        spotify.setAccessToken(token);
      }
      window.location.hash = "";
  }, [])
  return (
    <div className="Spotify-app">
    {
      token ? <h1>I have the token</h1> : <Login />
    }
    </div>
  );
}

export default App;
