/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useEffect, useState} from 'react';
import './Login.css';
import {loginURL, getTokenFromURL} from '../../utility/spotify';

function Login() {
    const [token, setToken] = useState('');

    useEffect(() => {
        const hash = getTokenFromURL();
        const token = hash.access_token;
        if(token.length > 0){
            setToken(token);
        }
        window.location.hash = "";
    }, [])

    return (
        <div className="spotify-login">
            <img className="spotify-logo" src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="spotify-logo" />            
            <a href={loginURL} className="login-button">LOGIN with SPOTIFY</a>
        </div>
    )
}

export default Login;
