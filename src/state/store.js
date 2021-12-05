import { applyMiddleware, createStore } from "redux";
import reducers from "./reducers";
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reduxPromiseMiddleware from 'redux-promise-middleware';

const middleware = applyMiddleware(reduxPromiseMiddleware, thunk, logger);
export const store = createStore(reducers, {}, middleware);
