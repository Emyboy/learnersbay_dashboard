import {
    combineReducers
} from 'redux';
import authReducer from './auth.reducer';
import classReducer from './class.reducer';
import optionsReducer from './options.reducer';
import viewReducer from './view.reducer';



const rootReducer = combineReducers({
   auth: authReducer,
   view: viewReducer,
   options: optionsReducer,
   classes: classReducer
});

export default rootReducer;
