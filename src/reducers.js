import { combineReducers } from 'redux';

import globalReducer from './containers/App/reducer';

const initialState = {
}

export default function createReducer( state = initialState, action){
    const rootReducer = combineReducers({
        global: globalReducer
    });  

    return rootReducer;  
}

