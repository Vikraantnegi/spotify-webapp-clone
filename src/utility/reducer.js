export const initialState = {
    user: null,
    playlist: [],
    playing: false,
    item: null,
    token: null,
    single_playlist: [],
}

const reducer = (state, action) => {
    switch(action.type){
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            }
        case 'SET_PLAYLIST':
            return{
                ...state,
                playlist: action.playlist
            }
        case 'SET_SINGLEPLAYLIST':
            return{
                ...state,
                single_playlist: action.single_playlist
            }            
        default:
            return state;
    }
}

export default reducer;