export const authEndpoint = 'https://accounts.spotify.com/authorize';
const redirectURL = 'https://localhost:3000/';
const clientID = 'db9f9882a5254379927112b08cd15b51';

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];

export const loginURL = `${authEndpoint}?client_id=${clientID}&redirect_uri=${redirectURL}&scope=${scopes.join('%')}&response_type=token&show_dialog=true`;