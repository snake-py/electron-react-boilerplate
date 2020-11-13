import { combineReducers } from 'redux';
import counterReducer from './counter';

// Example counter
const reducers = combineReducers({
    counter: counterReducer, 
    // somemore reducers
     
});

export default reducers