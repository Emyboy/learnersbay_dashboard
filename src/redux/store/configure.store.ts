import { createStore, applyMiddleware } from "redux";
//import dotenv from 'dotenv';

import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
// import logger from 'redux-logger';
import indexReducer from "../reducers/root.reducer";

//dotenv.config();
const middleware = [thunk];

const configureStore = (settings = {}) =>
    createStore(
        indexReducer,
        settings,
        process.env.NODE_ENV !== "production"
            ? composeWithDevTools(applyMiddleware(...middleware))
            : applyMiddleware(...middleware),
        // composeEnhancers(applyMiddleware(thunk, logger)),
        // applyMiddleware(thunk, logger)
    );

export default configureStore;
