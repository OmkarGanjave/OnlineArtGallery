import {configureStore} from "@reduxjs/toolkit";
import loggedReducer from './loggedSlice';




export default configureStore({
    reducer:{
        myreducer:loggedReducer
    }
});
