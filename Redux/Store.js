import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import AuthReducer from './Reducer/AuthReducer';

const reducer = combineReducers({
    AuthReducer: AuthReducer
})


const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));



export default store