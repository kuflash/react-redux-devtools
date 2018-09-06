import { createStore, combineReducers } from "redux";
import { firstCounterReducer, secondCounterReducer } from "./reducers";

const initialState = {
  firstCounter: 0,
  secondCounter: 0
};

const reduer = combineReducers({
  firstCounter: firstCounterReducer,
  secondCounter: secondCounterReducer
});

const devtools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export const store = createStore(reduer, initialState, devtools);
