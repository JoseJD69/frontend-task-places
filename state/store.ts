import {legacy_createStore as createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import {createWrapper} from "next-redux-wrapper";
import {composeWithDevTools} from "redux-devtools-extension";

export const AppStore = createStore(reducers, {},  composeWithDevTools(applyMiddleware(thunk)));
const makeStore = () => AppStore;
export const wrapper = createWrapper(makeStore, {debug: true});