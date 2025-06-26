import {configureStore} from '@reduxjs/toolkit'
import authReducer from './authSlice'; // adjust the path if it's in a subfolder
import bookmarkReducer from './bookmarkSlice';


const store = configureStore({
    reducer : {
        auth : authReducer,
        bookmarks: bookmarkReducer,
    }
})

export default store;