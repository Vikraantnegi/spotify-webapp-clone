/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './Login.css';
import {loginURL} from '../../utility/spotify';
import '../../styles/HelperStyles.css';

function Login() {
    return (
        <div className="spotify-login flexColumn flexBetween flexAlignCenter">
            <img className="spotify-logo" src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="spotify-logo" />            
            <a href={loginURL} className="login-button">LOGIN with SPOTIFY</a>
        </div>
    )
}

export default Login;
