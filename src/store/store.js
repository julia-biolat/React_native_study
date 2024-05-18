import { combineReducers, createStore, applyMiddleware } from "redux";
import logger from 'redux-logger';

import { favoriteReducer } from "../reducers/favoritePhoto";

const rootReducer = combineReducers({
    favorite:favoriteReducer
})

const store = createStore(rootReducer, applyMiddleware(logger));

export default store;


/*
import { combineReducers, createStore, applyMiddleware } from "redux";
import logger from 'redux-logger';

import { countReducer } from "../reducer/count";

const rootReducer = combineReducers({
    count:countReducer
    //dataCount : (이런것들 넣게 되면 reducer의 최상위 reducer가 하나씩 추가됨)
})

const store = createStore(rootReducer, applyMiddleware(logger));

export default store;

*/