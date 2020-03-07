import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import createReducer from "./reducers";
import rootSaga from "./sagas";

const composeEnhancers = composeWithDevTools({});
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  createReducer(),
  /* preloaded state, */ composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export default store;
