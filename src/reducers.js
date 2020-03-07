import { combineReducers } from "redux";

import globalReducer from "./containers/App/reducer";
import movieReducer from "./containers/Movies/reducer";

const initialState = {};

export default function createReducer(state = initialState, action) {
  const rootReducer = combineReducers({
    global: globalReducer,
    movie: movieReducer
  });

  return rootReducer;
}
